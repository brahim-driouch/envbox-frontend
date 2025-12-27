'use client';

import { useState } from 'react';
import { Plus,  Users, Box, Trash2, Edit, Eye, EyeOff, X } from 'lucide-react';
import { LoadingInline } from '@/app/components/shared/loading';
import { Sidebar } from '@/app/components/dashboard/sidebar';
import { useAuth } from '@/authProvider';

interface Project {
  id: string;
  name: string;
  description: string;
  envVars: EnvVar[];
  assignedTeam?: string;
  assignedMembers: string[];
  createdAt: Date;
}

interface EnvVar {
  id: string;
  key: string;
  value: string;
}

interface Team {
  id: string;
  name: string;
  members: string[];
  createdAt: Date;
}

interface Member {
  id: string;
  name: string;
  email: string;
  role: string;
}

export default function Dashboard() {
  

  const [activeView, setActiveView] = useState<'projects' | 'teams' | 'members'>('projects');
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      name: 'Production API',
      description: 'Main production environment',
      envVars: [
        { id: '1', key: 'DATABASE_URL', value: 'postgresql://prod.db' },
        { id: '2', key: 'API_KEY', value: '***********' },
      ],
      assignedTeam: 'Backend Team',
      assignedMembers: ['john@example.com'],
      createdAt: new Date(),
    },
  ]);
  const [teams, setTeams] = useState<Team[]>([
    {
      id: '1',
      name: 'Backend Team',
      members: ['john@example.com', 'jane@example.com'],
      createdAt: new Date(),
    },
  ]);
  const [members, setMembers] = useState<Member[]>([
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Developer' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Developer' },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'project' | 'team' | 'member' | 'env'>('project');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
const data = useAuth();
  if(data.isLoading) return <LoadingInline/>
  if(data.isError) return <div>Error: {data.error}</div>
 
  const openModal = (type: 'project' | 'team' | 'member' | 'env', project?: Project) => {
    setModalType(type);
    setSelectedProject(project || null);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const deleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const deleteTeam = (id: string) => {
    setTeams(teams.filter(t => t.id !== id));
  };

  const deleteMember = (id: string) => {
    setMembers(members.filter(m => m.id !== id));
  };

  return (
    <div className="min-h-screen w-full  text-white font-mono">
      {/* Grid Background Effect */}
      <div className="fixed inset-0 bg-[linear-linear(to_right,#1a1a1a_1px,transparent_1px),linear-linear(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
      
      <div className="relative grid lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
      <Sidebar 
        activeView={activeView} 
        setActiveView={setActiveView} 
        projectsLength={projects.length} 
        teamsLength={teams.length} 
        membersLength={members.length} 
      />

        {/* Main Content */}
        <main className="p-4 lg:p-8">
          {/* Header */}
          <header className="mb-12 animate-fade-in">
            <h2 className="text-6xl lg:text-8xl font-black tracking-tighter uppercase mb-4 
                         bg-linear-to-br from-white via-emerald-400 to-cyan-400 bg-clip-text text-transparent
                         leading-none">
              {activeView}
            </h2>
            <p className="text-zinc-500 text-sm uppercase tracking-wider">
              Manage your {activeView} and configurations
            </p>
          </header>

          {/* Content Views */}
          {activeView === 'projects' && (
            <ProjectsView
              projects={projects}
              teams={teams}
              members={members}
              onOpenModal={openModal}
              onDelete={deleteProject}
            />
          )}

          {activeView === 'teams' && (
            <TeamsView
              teams={teams}
              members={members}
              onOpenModal={openModal}
              onDelete={deleteTeam}
            />
          )}

          {activeView === 'members' && (
            <MembersView
              members={members}
              onOpenModal={openModal}
              onDelete={deleteMember}
            />
          )}
        </main>
      </div>

      {/* Modal */}
      {showModal && (
        <Modal
          type={modalType}
          project={selectedProject}
          teams={teams}
          members={members}
          onClose={closeModal}
          onSave={(data: any) => {
            if (modalType === 'project') {
              if (selectedProject) {
                setProjects(projects.map(p => p.id === selectedProject.id ? { ...p, ...data } : p));
              } else {
                setProjects([...projects, { ...data, id: Date.now().toString(), createdAt: new Date() }]);
              }
            } else if (modalType === 'team') {
              setTeams([...teams, { ...data, id: Date.now().toString(), createdAt: new Date() }]);
            } else if (modalType === 'member') {
              setMembers([...members, { ...data, id: Date.now().toString() }]);
            } else if (modalType === 'env' && selectedProject) {
              const updatedProject = {
                ...selectedProject,
                envVars: [...selectedProject.envVars, { ...data, id: Date.now().toString() }]
              };
              setProjects(projects.map(p => p.id === selectedProject.id ? updatedProject : p));
            }
            closeModal();
          }}
        />
      )}
    </div>
  );
}








function ProjectsView({ projects, teams, members, onOpenModal, onDelete }: any) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-end mb-6">
        <button
          onClick={() => onOpenModal('project')}
          className="px-6 py-3 bg-emerald-400 text-black font-bold uppercase tracking-wider
                   hover:bg-emerald-300 transition-all duration-200 flex items-center gap-2
                   shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                   hover:translate-x-[2px] hover:translate-y-[2px]"
        >
          <Plus className="w-5 h-5" />
          New Project
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project: Project, index: number) => (
          <div
            key={project.id}
            className="bg-zinc-950 border-4 border-zinc-800 p-6 hover:border-emerald-400 
                     transition-all duration-300 group animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2">{project.name}</h3>
                <p className="text-sm text-zinc-500">{project.description}</p>
              </div>
              <div className="flex gap-2">
                <IconButton
                  icon={<Edit className="w-4 h-4" />}
                  onClick={() => onOpenModal('project', project)}
                  color="cyan"
                />
                <IconButton
                  icon={<Trash2 className="w-4 h-4" />}
                  onClick={() => onDelete(project.id)}
                  color="red"
                />
              </div>
            </div>

            {/* Team Assignment */}
            {project.assignedTeam && (
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-cyan-400/10 border border-cyan-400 text-cyan-400 text-xs uppercase font-bold">
                  Team: {project.assignedTeam}
                </span>
              </div>
            )}

            {/* Environment Variables */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center">
                <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold">
                  Environment Variables ({project.envVars.length})
                </h4>
                <button
                  onClick={() => onOpenModal('env', project)}
                  className="text-xs text-emerald-400 hover:text-emerald-300 uppercase font-bold"
                >
                  + Add
                </button>
              </div>
              <div className="space-y-1">
                {project.envVars.slice(0, 3).map((env: EnvVar) => (
                  <EnvVarItem key={env.id} envVar={env} />
                ))}
                {project.envVars.length > 3 && (
                  <div className="text-xs text-zinc-600 uppercase">
                    +{project.envVars.length - 3} more...
                  </div>
                )}
              </div>
            </div>

            {/* Assigned Members */}
            {project.assignedMembers.length > 0 && (
              <div className="pt-4 border-t-2 border-zinc-800">
                <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-2">
                  Assigned Members
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.assignedMembers.map((member, i) => (
                    <span key={i} className="px-2 py-1 bg-zinc-900 text-xs border border-zinc-700">
                      {member}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamsView({ teams, members, onOpenModal, onDelete }: any) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-end mb-6">
        <button
          onClick={() => onOpenModal('team')}
          className="px-6 py-3 bg-cyan-400 text-black font-bold uppercase tracking-wider
                   hover:bg-cyan-300 transition-all duration-200 flex items-center gap-2
                   shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                   hover:translate-x-[2px] hover:translate-y-[2px]"
        >
          <Plus className="w-5 h-5" />
          New Team
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {teams.map((team: Team, index: number) => (
          <div
            key={team.id}
            className="bg-zinc-950 border-4 border-zinc-800 p-6 hover:border-cyan-400 
                     transition-all duration-300 animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2">{team.name}</h3>
                <p className="text-sm text-zinc-500">{team.members.length} members</p>
              </div>
              <div className="flex gap-2">
                <IconButton
                  icon={<Edit className="w-4 h-4" />}
                  onClick={() => {}}
                  color="cyan"
                />
                <IconButton
                  icon={<Trash2 className="w-4 h-4" />}
                  onClick={() => onDelete(team.id)}
                  color="red"
                />
              </div>
            </div>

            <div className="space-y-2">
              {team.members.map((member, i) => (
                <div key={i} className="px-3 py-2 bg-zinc-900 border border-zinc-800 text-sm">
                  {member}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MembersView({ members, onOpenModal, onDelete }: any) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-end mb-6">
        <button
          onClick={() => onOpenModal('member')}
          className="px-6 py-3 bg-purple-400 text-black font-bold uppercase tracking-wider
                   hover:bg-purple-300 transition-all duration-200 flex items-center gap-2
                   shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                   hover:translate-x-[2px] hover:translate-y-[2px]"
        >
          <Plus className="w-5 h-5" />
          New Member
        </button>
      </div>

      <div className="grid gap-4">
        {members.map((member: Member, index: number) => (
          <div
            key={member.id}
            className="bg-zinc-950 border-4 border-zinc-800 p-6 hover:border-purple-400 
                     transition-all duration-300 flex justify-between items-center animate-slide-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div>
              <h3 className="text-xl font-black uppercase tracking-tight mb-1">{member.name}</h3>
              <p className="text-sm text-zinc-500">{member.email}</p>
              <span className="inline-block mt-2 px-2 py-1 bg-zinc-900 border border-zinc-700 text-xs uppercase">
                {member.role}
              </span>
            </div>
            <div className="flex gap-2">
              <IconButton
                icon={<Edit className="w-4 h-4" />}
                onClick={() => {}}
                color="purple"
              />
              <IconButton
                icon={<Trash2 className="w-4 h-4" />}
                onClick={() => onDelete(member.id)}
                color="red"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EnvVarItem({ envVar }: { envVar: EnvVar }) {
  const [showValue, setShowValue] = useState(false);

  return (
    <div className="grid grid-cols-[1fr_2fr_auto] gap-4 items-center bg-zinc-900 border border-zinc-800 p-3 text-sm">
      <span className="font-bold text-emerald-400 uppercase truncate">{envVar.key}</span>
      <span className="text-zinc-500 truncate font-mono">
        {showValue ? envVar.value : '••••••••••'}
      </span>
      <button
        onClick={() => setShowValue(!showValue)}
        className="text-zinc-600 hover:text-emerald-400 transition-colors"
      >
        {showValue ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
      </button>
    </div>
  );
}

function IconButton({ icon, onClick, color }: any) {
  const colors = {
    cyan: 'hover:bg-cyan-400 hover:border-cyan-400',
    red: 'hover:bg-red-500 hover:border-red-500',
    purple: 'hover:bg-purple-400 hover:border-purple-400',
  };

  return (
    <button
      onClick={onClick}
      className={`p-2 border-2 border-zinc-700 text-zinc-400 hover:text-black
                 transition-all duration-200 ${colors[color as keyof typeof colors]}`}
    >
      {icon}
    </button>
  );
}

function Modal({ type, project, teams, members, onClose, onSave }: any) {
  const [formData, setFormData] = useState<any>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-zinc-950 border-4 border-emerald-400 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
        <div className="sticky top-0 bg-zinc-950 border-b-4 border-zinc-800 p-6 flex justify-between items-center">
          <h2 className="text-3xl font-black uppercase tracking-tight">
            {type === 'env' ? 'Add Environment Variable' : `Create ${type}`}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-red-500 hover:text-black transition-all duration-200 border-2 border-zinc-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {type === 'project' && (
            <>
              <FormField
                label="Project Name"
                value={formData.name || ''}
                onChange={(value : string)    => setFormData({ ...formData, name: value })}
                placeholder="My Awesome Project"
              />
              <FormField
                label="Description"
                value={formData.description || ''}
                onChange={(value : string) => setFormData({ ...formData, description: value })}
                placeholder="Brief description of your project"
                textarea
              />
              <div>
                <label className="block text-xs uppercase tracking-widest text-zinc-500 font-bold mb-2">
                  Assign Team (Optional)
                </label>
                <select
                  className="w-full bg-zinc-900 border-2 border-zinc-700 p-3 text-white focus:border-emerald-400 outline-none"
                  onChange={(e) => setFormData({ ...formData, assignedTeam: e.target.value })}
                >
                  <option value="">No team</option>
                  {teams.map((team: Team) => (
                    <option key={team.id} value={team.name}>{team.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-zinc-500 font-bold mb-2">
                  Assign Members (Optional)
                </label>
                <div className="bg-zinc-900 border-2 border-zinc-700 p-4 space-y-2 max-h-40 overflow-y-auto">
                  {members.map((member: Member) => (
                    <label key={member.id} className="flex items-center gap-3 cursor-pointer hover:bg-zinc-800 p-2">
                      <input
                        type="checkbox"
                        className="w-4 h-4 accent-emerald-400"
                        onChange={(e) => {
                          const currentMembers = formData.assignedMembers || [];
                          if (e.target.checked) {
                            setFormData({ ...formData, assignedMembers: [...currentMembers, member.email] });
                          } else {
                            setFormData({ ...formData, assignedMembers: currentMembers.filter((m: string) => m !== member.email) });
                          }
                        }}
                      />
                      <span className="text-sm">{member.name} ({member.email})</span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}

          {type === 'team' && (
            <>
              <FormField
                label="Team Name"
                value={formData.name || ''}
                onChange={(value : string) => setFormData({ ...formData, name: value })}
                placeholder="Engineering Team"
              />
              <div>
                <label className="block text-xs uppercase tracking-widest text-zinc-500 font-bold mb-2">
                  Select Members
                </label>
                <div className="bg-zinc-900 border-2 border-zinc-700 p-4 space-y-2 max-h-40 overflow-y-auto">
                  {members.map((member: Member) => (
                    <label key={member.id} className="flex items-center gap-3 cursor-pointer hover:bg-zinc-800 p-2">
                      <input
                        type="checkbox"
                        className="w-4 h-4 accent-cyan-400"
                        onChange={(e) => {
                          const currentMembers = formData.members || [];
                          if (e.target.checked) {
                            setFormData({ ...formData, members: [...currentMembers, member.email] });
                          } else {
                            setFormData({ ...formData, members: currentMembers.filter((m: string) => m !== member.email) });
                          }
                        }}
                      />
                      <span className="text-sm">{member.name} ({member.email})</span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}

          {type === 'member' && (
            <>
              <FormField
                label="Full Name"
                value={formData.name || ''}
                onChange={(value : string) => setFormData({ ...formData, name: value })}
                placeholder="John Doe"
              />
              <FormField
                label="Email"
                value={formData.email || ''}
                onChange={(value : string) => setFormData({ ...formData, email: value })}
                placeholder="john@example.com"
                inputType="email"
              />
              <FormField
                label="Role"
                value={formData.role || ''}
                onChange={(value : string) => setFormData({ ...formData, role: value })}
                placeholder="Developer"
              />
            </>
          )}

          {type === 'env' && (
            <>
              <FormField
                label="Key"
                value={formData.key || ''}
                onChange={(value : string) => setFormData({ ...formData, key: value })}
                placeholder="DATABASE_URL"
              />
              <FormField
                label="Value"
                value={formData.value || ''}
                onChange={(value : string) => setFormData({ ...formData, value: value })}
                placeholder="postgresql://..."
              />
            </>
          )}

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-emerald-400 text-black font-bold uppercase tracking-wider
                       hover:bg-emerald-300 transition-all duration-200
                       shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                       hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-zinc-800 text-white font-bold uppercase tracking-wider
                       hover:bg-zinc-700 transition-all duration-200 border-2 border-zinc-700"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function FormField({ label, value, onChange, placeholder, textarea = false, inputType = 'text' }: any) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-zinc-500 font-bold mb-2">
        {label}
      </label>
      {textarea ? (
        <textarea
          className="w-full bg-zinc-900 border-2 border-zinc-700 p-3 text-white 
                   focus:border-emerald-400 outline-none min-h-[100px] resize-y"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={inputType}
          className="w-full bg-zinc-900 border-2 border-zinc-700 p-3 text-white 
                   focus:border-emerald-400 outline-none"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}