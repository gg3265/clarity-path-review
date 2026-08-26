// @ts-nocheck
import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, useMemo } from 'react'
import { supabase } from '@/lib/supabase'
import { fetchAdminTests, fetchAdminPackages, fetchAdminSettings } from '@/lib/api'
import { Search, Save, X, Edit2, AlertCircle, CheckCircle2 } from 'lucide-react'

export const Route = createFileRoute('/admin/')({
  component: AdminDashboard,
})

// Proper Indian Currency Formatter
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'tests' | 'clinical' | 'second_opinion' | 'cancer' | 'settings'>('tests')
  
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="border-b border-gray-200 bg-gray-50/50">
        <nav className="flex overflow-x-auto custom-scrollbar -mb-px">
          {[
            { id: 'tests', label: 'Test Directory' },
            { id: 'clinical', label: 'Health Packages' },
            { id: 'second_opinion', label: 'Second Opinion' },
            { id: 'cancer', label: 'Cancer Services' },
            { id: 'settings', label: 'Site Settings' },
          ].map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)} 
              className={`whitespace-nowrap py-4 px-6 border-b-2 font-semibold text-sm transition-colors ${
                activeTab === tab.id 
                ? 'border-blue-600 text-blue-700 bg-white' 
                : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="p-4 sm:p-6 lg:p-8 min-h-[600px]">
        {activeTab === 'tests' && <TestsManager />}
        {activeTab === 'clinical' && <PackagesManager categoryFilter="Clinical Health Packages" />}
        {activeTab === 'second_opinion' && <PackagesManager categoryFilter="Pathology Second Opinion" />}
        {activeTab === 'cancer' && <CancerServicesManager />}
        {activeTab === 'settings' && <SettingsManager />}
      </div>
    </div>
  )
}

// ==========================================
// SHARED UI COMPONENTS
// ==========================================

function InlineEdit({ 
  initialValue, 
  onSave,
  type = 'number'
}: { 
  initialValue: number | string; 
  onSave: (val: number | string) => Promise<void>;
  type?: 'text' | 'number';
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (type === 'number') {
      const num = Number(value);
      if (isNaN(num) || num < 0 || value === '') {
        alert("Please enter a valid non-negative price.");
        return;
      }
    }
    if (value === initialValue) {
      setIsEditing(false);
      return;
    }
    
    setSaving(true);
    try {
      await onSave(type === 'number' ? Number(value) : value);
      setIsEditing(false);
    } catch (e: any) {
      alert("Error saving: " + e.message);
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setValue(initialValue);
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <div className="flex items-center gap-3">
        <span className="font-semibold text-gray-900">
          {type === 'number' ? formatCurrency(Number(initialValue)) : initialValue}
        </span>
        <button 
          onClick={() => setIsEditing(true)}
          className="text-gray-400 hover:text-blue-600 transition-colors p-1"
          title="Edit"
        >
          <Edit2 className="size-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <input 
        type={type} 
        value={value} 
        onChange={e => setValue(e.target.value)} 
        className="w-24 p-1.5 border-2 border-blue-200 rounded-md focus:outline-none focus:border-blue-500 text-sm font-semibold"
        autoFocus
        disabled={saving}
        min={0}
      />
      <button 
        onClick={handleSave} 
        disabled={saving}
        className="text-green-600 hover:text-green-800 p-1 disabled:opacity-50"
      >
        <Save className="size-4" />
      </button>
      <button 
        onClick={handleCancel} 
        disabled={saving}
        className="text-red-500 hover:text-red-700 p-1 disabled:opacity-50"
      >
        <X className="size-4" />
      </button>
    </div>
  );
}

// ==========================================
// TEST MANAGER
// ==========================================

function TestsManager() {
  const [tests, setTests] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const loadTests = async () => {
    setLoading(true)
    try {
      const data = await fetchAdminTests()
      setTests(data || [])
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { loadTests() }, [])

  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(tests.map(t => t.category).filter(Boolean)))]
  }, [tests])

  const filteredTests = useMemo(() => {
    return tests.filter(t => {
      const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase()) || 
                           (t.crl_code || '').toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'All' || t.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [tests, search, category]);

  const handlePriceUpdate = async (id: string, newPrice: number) => {
    const test = tests.find(t => t.id === id);
    if (!test) return;
    const { error } = await supabase.from('tests').upsert({ 
      id, 
      name: test.name, 
      category: test.category || null, 
      price: newPrice,
      price_status: test.price_status || 'Confirmed'
    }, { onConflict: 'id' })
    if (error) throw error
    setTests(tests.map(t => t.id === id ? { ...t, price: newPrice } : t))
  }

  const toggleStatus = async (id: string, currentStatus: boolean) => {
    try {
      const test = tests.find(t => t.id === id);
      if (!test) return;
      const { error } = await supabase.from('tests').upsert({ 
        id, 
        name: test.name, 
        category: test.category || null, 
        price: test.price,
        price_status: test.price_status || 'Confirmed',
        is_active: !currentStatus 
      }, { onConflict: 'id' })
      if (error) throw error;
      setTests(tests.map(t => t.id === id ? { ...t, is_active: !currentStatus } : t))
    } catch(e: any) {
      alert("Status update failed: " + e.message);
    }
  }

  if (loading) return <div className="py-20 text-center text-gray-500 font-medium">Loading test directory...</div>

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Test Directory</h2>
          <p className="text-sm text-gray-500 mt-1">Manage pricing and availability for {tests.length} tests.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search tests..." 
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm w-full sm:w-64 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <select 
            value={category} 
            onChange={e => setCategory(e.target.value)}
            className="border border-gray-300 rounded-lg text-sm px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
          >
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
      
      <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Test Details</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredTests.length === 0 ? (
              <tr><td colSpan={4} className="px-6 py-10 text-center text-gray-500">No tests found matching your criteria.</td></tr>
            ) : filteredTests.map(test => (
              <tr key={test.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900">{test.name}</span>
                    <span className="text-xs text-gray-500 mt-1">{test.crl_code || 'No Code'} • {test.specimen || 'No Specimen'}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-medium">
                  {test.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <InlineEdit 
                    initialValue={test.price} 
                    onSave={(val) => handlePriceUpdate(test.id, val as number)} 
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <button 
                    onClick={() => toggleStatus(test.id, test.is_active)}
                    className={`px-3 py-1.5 inline-flex text-xs font-bold rounded-full transition-colors ${
                      test.is_active ? 'bg-green-100 text-green-800 hover:bg-green-200' : 'bg-red-100 text-red-800 hover:bg-red-200'
                    }`}
                  >
                    {test.is_active ? 'Active' : 'Inactive'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ==========================================
// PACKAGES MANAGER
// ==========================================

function PackagesManager({ categoryFilter }: { categoryFilter: string }) {
  const [packages, setPackages] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const loadPackages = async () => {
    setLoading(true)
    try {
      const data = await fetchAdminPackages()
      setPackages(data || [])
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => { loadPackages() }, [])

  const filteredPackages = useMemo(() => {
    return packages.filter(p => p.category === categoryFilter);
  }, [packages, categoryFilter])

  const handlePriceUpdate = async (id: string, newPrice: number) => {
    const pkg = packages.find(p => p.id === id);
    if (!pkg) return;
    const { error } = await supabase.from('packages').upsert({
      id,
      name: pkg.name,
      category: pkg.category || null,
      price: newPrice
    }, { onConflict: 'id' })
    if (error) throw error
    setPackages(packages.map(p => p.id === id ? { ...p, price: newPrice } : p))
  }

  const toggleStatus = async (id: string, currentStatus: boolean) => {
    try {
      const pkg = packages.find(p => p.id === id);
      if (!pkg) return;
      const { error } = await supabase.from('packages').upsert({
        id,
        name: pkg.name,
        category: pkg.category || null,
        price: pkg.price,
        is_active: !currentStatus
      }, { onConflict: 'id' })
      if (error) throw error;
      setPackages(packages.map(p => p.id === id ? { ...p, is_active: !currentStatus } : p))
    } catch(e: any) {
      alert("Status update failed: " + e.message);
    }
  }

  if (loading) return <div className="py-20 text-center text-gray-500 font-medium">Loading {categoryFilter}...</div>

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{categoryFilter}</h2>
          <p className="text-sm text-gray-500 mt-1">Manage pricing and details for package offerings.</p>
        </div>
      </div>
      
      <div className="grid gap-6">
        {filteredPackages.map(pkg => (
          <div key={pkg.id} className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:border-blue-200 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                  <button 
                    onClick={() => toggleStatus(pkg.id, pkg.is_active)}
                    className={`px-2 py-1 text-[10px] uppercase font-bold rounded transition-colors ${
                      pkg.is_active ? 'bg-green-100 text-green-800 hover:bg-green-200' : 'bg-red-100 text-red-800 hover:bg-red-200'
                    }`}
                  >
                    {pkg.is_active ? 'Active' : 'Inactive'}
                  </button>
                </div>
                <p className="text-sm text-gray-500 max-w-2xl">{pkg.description || pkg.short_description}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 shrink-0 min-w-[200px]">
                <div className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-2">Package Price</div>
                <InlineEdit 
                  initialValue={pkg.price} 
                  onSave={(val) => handlePriceUpdate(pkg.id, val as number)} 
                />
              </div>
            </div>
            
            {pkg.included_tests && pkg.included_tests.length > 0 && (
              <div className="bg-gray-50/50 rounded-xl p-4 border border-gray-100">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Included Items ({pkg.included_tests.length})</h4>
                <div className="flex flex-wrap gap-2">
                  {pkg.included_tests.map((t: string, i: number) => (
                    <span key={i} className="bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// ==========================================
// CANCER SERVICES MANAGER
// ==========================================

function CancerServicesManager() {
  const [services, setServices] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const loadServices = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase.from('cancer_services').select('*').order('name')
      if (error) throw error
      setServices(data || [])
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { loadServices() }, [])

  const handlePriceUpdate = async (id: string, newPrice: number) => {
    const { error } = await supabase.from('cancer_services').update({ price: newPrice }).eq('id', id)
    if (error) throw error
    setServices(services.map(s => s.id === id ? { ...s, price: newPrice } : s))
  }

  const toggleStatus = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase.from('cancer_services').update({ is_active: !currentStatus }).eq('id', id)
      if (error) throw error;
      setServices(services.map(s => s.id === id ? { ...s, is_active: !currentStatus } : s))
    } catch(e: any) {
      alert("Status update failed: " + e.message);
    }
  }

  if (loading) return <div className="py-20 text-center text-gray-500 font-medium">Loading cancer services...</div>

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Cancer & Oncopathology Services</h2>
          <p className="text-sm text-gray-500 mt-1">Manage pricing for specialized oncology workflows.</p>
        </div>
      </div>
      
      {services.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-200 border-dashed">
          <AlertCircle className="size-10 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-900">No Services Found</h3>
          <p className="text-gray-500 max-w-sm mx-auto mt-2">Cancer services have not been seeded into the database yet.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {services.map(svc => (
            <div key={svc.id} className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm flex flex-col md:flex-row justify-between md:items-center gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{svc.name}</h3>
                  <button 
                    onClick={() => toggleStatus(svc.id, svc.is_active)}
                    className={`px-2 py-1 text-[10px] uppercase font-bold rounded transition-colors ${
                      svc.is_active ? 'bg-green-100 text-green-800 hover:bg-green-200' : 'bg-red-100 text-red-800 hover:bg-red-200'
                    }`}
                  >
                    {svc.is_active ? 'Active' : 'Inactive'}
                  </button>
                </div>
                <p className="text-sm text-gray-500 max-w-xl">{svc.description}</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 shrink-0 min-w-[200px]">
                <div className="text-xs font-bold uppercase text-gray-500 tracking-wider mb-2">Consultation / Base Price</div>
                {svc.price !== null && svc.price !== undefined ? (
                  <InlineEdit 
                    initialValue={svc.price} 
                    onSave={(val) => handlePriceUpdate(svc.id, val as number)} 
                  />
                ) : (
                  <div className="text-sm font-semibold text-gray-500">Variable / Upon Assessment</div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ==========================================
// SETTINGS MANAGER
// ==========================================

function SettingsManager() {
  const [settings, setSettings] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [saveMessage, setSaveMessage] = useState('')

  const loadSettings = async () => {
    setLoading(true)
    try {
      const data = await fetchAdminSettings()
      setSettings(data || [])
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { loadSettings() }, [])

  const handleUpdate = async (key: string, value: any) => {
    try {
      const { error } = await supabase.from('app_settings').upsert({ key, value, updated_at: new Date() })
      if (error) throw error
      setSaveMessage('Settings saved successfully!')
      setTimeout(() => setSaveMessage(''), 3000)
      loadSettings()
    } catch (e: any) {
      alert('Error updating settings: ' + e.message)
    }
  }

  if (loading) return <div className="py-20 text-center text-gray-500 font-medium">Loading settings...</div>

  const homeCollection = settings.find(s => s.key === 'home_collection')?.value || { freeRadiusKm: 5, fee: 200 }
  const promos = settings.find(s => s.key === 'promos')?.value || { bloodSugarPrice: 49, thyroidPrice: 299 }

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-4 mb-2">
          <h2 className="text-2xl font-bold text-gray-900">Site Settings</h2>
          {saveMessage && (
            <span className="flex items-center gap-1 text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full animate-fade-in">
              <CheckCircle2 className="size-4" /> {saveMessage}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-500">Manage global site configurations like homepage promotions and home collection rules.</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* PROMOS */}
        <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Promotional Highlights</h3>
          <p className="text-sm text-gray-500 mb-8">These prices are displayed prominently on the homepage hero section.</p>
          
          <div className="space-y-6">
            <div className="pb-6 border-b border-gray-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Blood Sugar Promo Price</label>
              <InlineEdit 
                initialValue={promos.bloodSugarPrice}
                onSave={(val) => handleUpdate('promos', { ...promos, bloodSugarPrice: Number(val) })}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Thyroid Promo Price</label>
              <InlineEdit 
                initialValue={promos.thyroidPrice}
                onSave={(val) => handleUpdate('promos', { ...promos, thyroidPrice: Number(val) })}
              />
            </div>
          </div>
        </div>

        {/* HOME COLLECTION */}
        <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Home Collection Rules</h3>
          <p className="text-sm text-gray-500 mb-8">Configure the logistics and extra charges for home sample collection.</p>
          
          <div className="space-y-6">
            <div className="pb-6 border-b border-gray-100">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Free Radius (km)</label>
              <InlineEdit 
                initialValue={homeCollection.freeRadiusKm}
                onSave={(val) => handleUpdate('home_collection', { ...homeCollection, freeRadiusKm: Number(val) })}
              />
              <p className="text-xs text-gray-400 mt-2">Bookings within this radius of the lab are free.</p>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Fee Beyond Radius</label>
              <InlineEdit 
                initialValue={homeCollection.fee}
                onSave={(val) => handleUpdate('home_collection', { ...homeCollection, fee: Number(val) })}
              />
              <p className="text-xs text-gray-400 mt-2">The flat fee applied to bookings outside the free radius.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
