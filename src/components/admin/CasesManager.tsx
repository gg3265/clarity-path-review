import React, { useState, useEffect, useMemo } from 'react';
import { supabase } from '@/lib/supabase';
import { Search, FileText, Download, Eye, Clock, User, Phone, Mail, FileUp, X, CheckCircle, AlertCircle } from 'lucide-react';

export function CasesManager() {
  const [cases, setCases] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [serviceFilter, setServiceFilter] = useState('All');
  
  const [selectedCase, setSelectedCase] = useState<any | null>(null);
  const [files, setFiles] = useState<any[]>([]);
  const [loadingFiles, setLoadingFiles] = useState(false);

  const loadCases = async () => {
    setLoading(true);
    try {
      // Fetch Second Opinion Requests
      const { data: soData, error: soErr } = await supabase
        .from('second_opinion_requests')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (soErr) throw soErr;
      
      const formattedData = (soData || []).map(r => ({
        ...r,
        type: 'second_opinion',
        serviceName: 'Pathology Second Opinion',
      }));
      
      setCases(formattedData);
    } catch (e) {
      console.error(e);
      alert("Failed to load cases");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadCases(); }, []);

  const loadFiles = async (requestId: string) => {
    setLoadingFiles(true);
    try {
      const { data, error } = await supabase
        .from('second_opinion_files')
        .select('*')
        .eq('request_id', requestId);
      if (error) throw error;
      setFiles(data || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingFiles(false);
    }
  };

  const handleSelectCase = (c: any) => {
    setSelectedCase(c);
    loadFiles(c.id);
  };

  const handleDownload = async (file: any) => {
    try {
      // Securely generate signed URL
      const { data, error } = await supabase.storage
        .from('prescriptions')
        .createSignedUrl(file.file_path, 60 * 5); // 5 mins
        
      if (error) throw error;
      
      if (data?.signedUrl) {
        window.open(data.signedUrl, '_blank');
      }
    } catch (e) {
      console.error("Download error:", e);
      alert("Failed to access document securely.");
    }
  };

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('second_opinion_requests')
        .update({ status: newStatus })
        .eq('id', id);
        
      if (error) throw error;
      
      setCases(prev => prev.map(c => c.id === id ? { ...c, status: newStatus } : c));
      if (selectedCase?.id === id) {
        setSelectedCase({ ...selectedCase, status: newStatus });
      }
    } catch (e: any) {
      alert("Status update failed: " + e.message);
    }
  };

  const filteredCases = useMemo(() => {
    return cases.filter(c => {
      const matchesSearch = c.patient_name?.toLowerCase().includes(search.toLowerCase()) || 
                           c.id.toLowerCase().includes(search.toLowerCase()) ||
                           c.mobile?.includes(search);
      const matchesStatus = statusFilter === 'All' || c.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [cases, search, statusFilter]);

  if (loading) return <div className="py-20 text-center text-gray-500 font-medium">Loading cases...</div>;

  if (selectedCase) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <button onClick={() => setSelectedCase(null)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="size-5 text-gray-600" />
          </button>
          <h2 className="text-2xl font-bold text-gray-900">Case Details</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{selectedCase.patient_name}</h3>
                  <p className="text-sm text-gray-500 mt-1">Ref: {selectedCase.id.split('-')[0]}</p>
                </div>
                <select 
                  value={selectedCase.status || 'PENDING'}
                  onChange={(e) => handleStatusUpdate(selectedCase.id, e.target.value)}
                  className="bg-gray-50 border border-gray-200 text-sm font-semibold rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="PENDING">PENDING</option>
                  <option value="REVIEWING">REVIEWING</option>
                  <option value="COMPLETED">COMPLETED</option>
                  <option value="REJECTED">REJECTED</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
                <div>
                  <label className="text-gray-500 flex items-center gap-1.5 mb-1"><Phone className="size-3.5" /> Mobile</label>
                  <p className="font-medium">{selectedCase.mobile || 'N/A'}</p>
                </div>
                <div>
                  <label className="text-gray-500 flex items-center gap-1.5 mb-1"><Mail className="size-3.5" /> Email</label>
                  <p className="font-medium">{selectedCase.email || 'N/A'}</p>
                </div>
                <div>
                  <label className="text-gray-500 flex items-center gap-1.5 mb-1"><Clock className="size-3.5" /> Submitted</label>
                  <p className="font-medium">{new Date(selectedCase.created_at).toLocaleString()}</p>
                </div>
                <div>
                  <label className="text-gray-500 flex items-center gap-1.5 mb-1"><FileText className="size-3.5" /> Service</label>
                  <p className="font-medium">{selectedCase.serviceName}</p>
                </div>
              </div>

              <div className="mt-8 border-t border-gray-100 pt-6">
                <label className="text-sm font-bold text-gray-700 mb-2 block">Clinical History & Notes</label>
                <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 whitespace-pre-wrap border border-gray-100">
                  {selectedCase.case_description || 'No additional notes provided.'}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileUp className="size-5 text-blue-600" />
                Attached Documents
              </h3>
              
              {loadingFiles ? (
                <p className="text-sm text-gray-500">Loading documents...</p>
              ) : files.length === 0 ? (
                <div className="text-center py-8 bg-gray-50 rounded-lg border border-dashed border-gray-200">
                  <FileText className="size-8 text-gray-300 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">No documents attached.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {files.map(f => (
                    <div key={f.id} className="flex flex-col gap-3 p-3 rounded-lg border border-gray-200 bg-gray-50 hover:bg-gray-100/50 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="bg-white p-2 rounded shadow-sm border border-gray-200 text-blue-600">
                          <FileText className="size-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-gray-900 truncate" title={f.file_name}>{f.file_name}</p>
                          <p className="text-xs text-gray-500 truncate">{f.file_type || 'Document'}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => handleDownload(f)}
                        className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 shadow-sm rounded-md py-1.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                      >
                        <Download className="size-4" /> Secure Access
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Incoming Cases</h2>
          <p className="text-sm text-gray-500 mt-1">Manage {cases.length} Second Opinion requests securely.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search patients, ref..." 
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm w-full sm:w-64 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <select 
            value={statusFilter} 
            onChange={e => setStatusFilter(e.target.value)}
            className="border border-gray-300 rounded-lg text-sm px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
          >
            <option value="All">All Statuses</option>
            <option value="PENDING">PENDING</option>
            <option value="REVIEWING">REVIEWING</option>
            <option value="COMPLETED">COMPLETED</option>
            <option value="REJECTED">REJECTED</option>
          </select>
        </div>
      </div>
      
      <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Patient / Ref</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Submitted</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredCases.length === 0 ? (
              <tr><td colSpan={5} className="px-6 py-10 text-center text-gray-500">No cases found matching your criteria.</td></tr>
            ) : filteredCases.map(c => (
              <tr key={c.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900">{c.patient_name}</span>
                    <span className="text-xs text-gray-500 mt-1 font-mono">{c.id.split('-')[0]}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{c.mobile || 'N/A'}</div>
                  <div className="text-xs text-gray-500 mt-1">{c.email || 'N/A'}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {new Date(c.created_at).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                    c.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                    c.status === 'REVIEWING' ? 'bg-blue-100 text-blue-800' :
                    c.status === 'COMPLETED' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {c.status || 'PENDING'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button onClick={() => handleSelectCase(c)} className="text-blue-600 hover:text-blue-900 flex items-center justify-end gap-1 w-full">
                    <Eye className="size-4" /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
