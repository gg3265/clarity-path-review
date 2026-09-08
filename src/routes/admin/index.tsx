// @ts-nocheck
import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, useMemo } from 'react'
import { supabase } from '@/lib/supabase'
import { fetchAdminTests, fetchAdminPackages, fetchAdminSettings } from '@/lib/api'
import { Search, Save, X, Edit2, AlertCircle, CheckCircle2 } from 'lucide-react'
import { CasesManager } from '@/components/admin/CasesManager'

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
  const [activeTab, setActiveTab] = useState<'cases' | 'tests' | 'clinical' | 'second_opinion' | 'cancer' | 'settings'>('cases')
  
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="border-b border-gray-200 bg-gray-50/50">
        <nav className="flex overflow-x-auto custom-scrollbar -mb-px">
          {[
            { id: 'cases', label: 'Incoming Cases' },
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
        {activeTab === 'cases' && <CasesManager />}
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


// ==========================================
// ADD TEST MODAL
// ==========================================
function AddTestModal({ 
  isOpen, 
  onClose, 
  onSuccess, 
  existingCategories 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  onSuccess: () => void;
  existingCategories: string[];
}) {
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    crl_code: '',
    specimen: '',
    turnaround_time: '',
    description: '',
    preparation: '',
    is_active: true
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const { name, category, price } = formData;
    
    // Validation
    if (!name.trim()) return setError("Test Name is required");
    if (!category.trim()) return setError("Category is required");
    
    const numPrice = Number(price);
    if (price !== '' && (isNaN(numPrice) || numPrice < 0)) {
      return setError("Price must be a valid non-negative number");
    }

    setSaving(true);
    
    try {
      // Duplicate protection: Check if a test with the same name already exists
      const { data: existing } = await supabase
        .from('tests')
        .select('id')
        .ilike('name', name.trim())
        .limit(1);
        
      if (existing && existing.length > 0) {
        throw new Error("A test with this exact name already exists in the database.");
      }

      // Generate a stable ID
      const newId = name.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + Math.floor(Math.random() * 1000);

      const { error: insertError } = await supabase.from('tests').insert([{
        id: newId,
        name: name.trim(),
        category: category.trim(),
        price: price === '' ? null : numPrice,
        crl_code: formData.crl_code.trim() || null,
        specimen: formData.specimen.trim() || null,
        turnaround_time: formData.turnaround_time.trim() || null,
        description: formData.description.trim() || null,
        preparation: formData.preparation.trim() || null,
        is_active: formData.is_active,
        price_status: 'Confirmed'
      }]);

      if (insertError) throw insertError;

      onSuccess();
      onClose();
      // Reset form
      setFormData({
        name: '', category: '', price: '', crl_code: '', specimen: '', turnaround_time: '', description: '', preparation: '', is_active: true
      });
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to create test. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl my-8">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Add New Test</h2>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
            <X className="size-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && (
            <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm flex items-start gap-3">
              <AlertCircle className="size-5 shrink-0" />
              <p>{error}</p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Test Name *</label>
              <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="e.g. CRL Complete Liver Profile" required />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Category *</label>
              <input type="text" list="categories-list" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="Select or type category" required />
              <datalist id="categories-list">
                {existingCategories.filter(c => c !== 'All').map(c => <option key={c} value={c} />)}
              </datalist>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Price (₹)</label>
              <input type="number" min="0" step="1" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="e.g. 799" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">CRL Code</label>
              <input type="text" value={formData.crl_code} onChange={e => setFormData({...formData, crl_code: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="e.g. CRL-LIV-01" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Sample Type (Specimen)</label>
              <input type="text" value={formData.specimen} onChange={e => setFormData({...formData, specimen: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="e.g. Serum, 2ml" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Turnaround Time</label>
              <input type="text" value={formData.turnaround_time} onChange={e => setFormData({...formData, turnaround_time: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="e.g. 24 Hours" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Preparation / Fasting</label>
              <input type="text" value={formData.preparation} onChange={e => setFormData({...formData, preparation: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" placeholder="e.g. 10-12 hours fasting required" />
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
              <textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" rows={3} placeholder="Brief description of the test..." />
            </div>
            
            <div className="col-span-1 md:col-span-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={formData.is_active} onChange={e => setFormData({...formData, is_active: e.target.checked})} className="size-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm font-semibold text-gray-900">Active (Visible to customers)</span>
              </label>
            </div>
          </div>
          
          <div className="flex justify-end gap-3 pt-6 border-t border-gray-100">
            <button type="button" onClick={onClose} className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              Cancel
            </button>
            <button type="submit" disabled={saving} className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50 flex items-center gap-2">
              {saving ? 'Saving...' : 'Save Test'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function TestsManager() {
  const [tests, setTests] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [showAddModal, setShowAddModal] = useState(false)

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
  
  const handleAddSuccess = () => {
    loadTests();
    // Optional toast notification here if you use sonner/react-hot-toast, but we will rely on reload
  }

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
    const testId = id;
    
    // 1. Fetch BEFORE update directly from DB
    const { data: beforeData } = await supabase.from('tests').select('price').eq('id', testId).single();
    const priceBefore = beforeData?.price;

    // 2. Execute UPDATE
    // Use UPSERT because the test might only exist in the static fallback data and needs to be instantiated in Supabase
    const { error: updateError, data: updateData } = await supabase.from('tests').upsert({ 
      id: testId,
      name: test.name,
      category: test.category || null,
      price: newPrice,
      price_status: test.price_status || 'Confirmed',
      is_active: test.is_active !== undefined ? test.is_active : true
    }, { onConflict: 'id' }).select();

    // 3. Fetch AFTER update directly from DB
    const { data: afterData } = await supabase.from('tests').select('price').eq('id', testId).single();
    const priceAfter = afterData?.price;

    // 4. Determine root cause
    let conclusion = "";
    if (priceAfter === priceBefore && updateError) {
      conclusion = "DATABASE UPDATE FAILED (DB/RLS issue). The DB explicitly rejected the write.";
    } else if (priceAfter === priceBefore && !updateError) {
      conclusion = "SILENT FAILURE. Query returned no error, but 0 rows were modified (likely USING clause failed).";
    } else if (priceAfter === newPrice) {
      conclusion = "DATABASE UPDATE SUCCEEDED. If UI shows old price on refresh, it's a CACHING/FETCHING issue.";
    }

    const report = `
=== CRITICAL DEBUG REPORT ===
1. Test ID: ${testId}
2. Price BEFORE update: ${priceBefore}
3. Query Executed: .upsert({ price: ${newPrice} ... })
4. Supabase Error: ${updateError ? JSON.stringify(updateError, null, 2) : 'NONE'}
5. Price AFTER update: ${priceAfter}

CONCLUSION: ${conclusion}
===========================`;

    console.log(report);
    alert(report); // Display directly to the admin

    if (updateError) throw updateError;
    
    // Update local state if DB update succeeded
    setTests(tests.map(t => t.id === testId ? { ...t, price: newPrice } : t));
  }

  const toggleStatus = async (id: string, currentStatus: boolean) => {
    try {
      const test = tests.find(t => t.id === id);
      if (!test) return;
      const { error } = await supabase.from('tests').update({ 
        is_active: !currentStatus 
      }).eq('id', id);
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
          <button onClick={() => setShowAddModal(true)} className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors hidden sm:block">
            + Add Test
          </button>
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
      
      <div className="sm:hidden mb-4">
        <button onClick={() => setShowAddModal(true)} className="w-full bg-black text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors">
          + Add Test
        </button>
      </div>
      
      <AddTestModal 
        isOpen={showAddModal} 
        onClose={() => setShowAddModal(false)} 
        onSuccess={handleAddSuccess}
        existingCategories={categories}
      />
      
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

  const homeCollection = settings.find(s => s.key === 'home_collection')?.value || { freeRadiusKm: 5, fee: 100 }
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
