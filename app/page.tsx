/**
 * LandingPage.tsx
 * Main landing page for EnvFlow - Development Environment Variables Management
 */

import { Check, X, Shield, Users, Terminal, Mail, Lock, Zap, Code, Server, Key } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600">
                <Key className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">EnvFlow</span>
            </div>
            <div className="hidden space-x-8 md:flex">
              <a href="#features" className="font-medium text-gray-600 hover:text-gray-900">Features</a>
              <a href="#how-it-works" className="font-medium text-gray-600 hover:text-gray-900">How it Works</a>
              <a href="#pricing" className="font-medium text-gray-600 hover:text-gray-900">Pricing</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="font-medium text-gray-600 hover:text-gray-900">Sign In</a>
              <a href="#" className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2 font-medium text-white hover:opacity-90">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2">
            <Shield className="mr-2 h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Secure Development Variables Made Simple</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
            Stop Sharing
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Environment Variables
            </span>
            The Wrong Way
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-600">
            EnvFlow helps small teams securely manage development environment variables without the complexity of enterprise solutions or the insecurity of Slack messages.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#" className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 text-lg font-medium text-white hover:opacity-90">
              Start Free Trial
            </a>
            <a href="#how-it-works" className="rounded-lg border border-gray-300 bg-white px-8 py-3 text-lg font-medium text-gray-700 hover:bg-gray-50">
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">The Development Variable Nightmare</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Every developer has been here. Managing environment variables shouldn't be this hard.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                <X className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">Slack & Email Chaos</h3>
              <p className="mb-4 text-gray-600">
                Variables get lost in chat history, sent to wrong channels, or buried in email threads. No version control, no access logs.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <X className="mr-2 h-4 w-4 text-red-400" />
                  No access control
                </li>
                <li className="flex items-center">
                  <X className="mr-2 h-4 w-4 text-red-400" />
                  Search nightmare
                </li>
                <li className="flex items-center">
                  <X className="mr-2 h-4 w-4 text-red-400" />
                  Easy to leak
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                <Shield className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">Over-Engineered Solutions</h3>
              <p className="mb-4 text-gray-600">
                Tools like Doppler or Vault are built for large enterprises, not small teams. Too complex, too expensive, too much overhead.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <X className="mr-2 h-4 w-4 text-red-400" />
                  Steep learning curve
                </li>
                <li className="flex items-center">
                  <X className="mr-2 h-4 w-4 text-red-400" />
                  Enterprise pricing
                </li>
                <li className="flex items-center">
                  <X className="mr-2 h-4 w-4 text-red-400" />
                  Config complexity
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">Team Onboarding Hell</h3>
              <p className="mb-4 text-gray-600">
                New developers waste hours setting up their environment. Missing variables, incorrect values, outdated secrets.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <X className="mr-2 h-4 w-4 text-red-400" />
                  Manual setup errors
                </li>
                <li className="flex items-center">
                  <X className="mr-2 h-4 w-4 text-red-400" />
                  Time-consuming
                </li>
                <li className="flex items-center">
                  <X className="mr-2 h-4 w-4 text-red-400" />
                  No consistency
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Simple, Secure Workflow</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Built for developers who just want to get back to coding.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="relative">
              <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-2xl font-bold text-white md:relative md:left-0 md:mb-6">
                1
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">Create Projects & Variables</h3>
                <p className="text-gray-600">
                  Team leads create projects and securely add environment variables. Organize by development, staging, production.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-2xl font-bold text-white md:relative md:left-0 md:mb-6">
                2
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
                  <Mail className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">Invite Team Members</h3>
                <p className="text-gray-600">
                  Add team members to projects. They receive secure email invitations to set up their access.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-2xl font-bold text-white md:relative md:left-0 md:mb-6">
                3
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-green-50">
                  <Terminal className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">Inject with CLI</h3>
                <p className="text-gray-600">
                  Developers use our CLI to securely inject variables into their local environment. No manual copying.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">What Makes EnvFlow Different</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              We built the tool we wish existed for our own teams.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
                <Lock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">Secure by Default</h3>
              <p className="text-gray-600">
                End-to-end encryption, audit logs, and role-based access control. Security doesn't have to be complicated.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-green-50 to-emerald-50">
                <Terminal className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">Developer-First CLI</h3>
              <p className="text-gray-600">
                Simple commands like <code className="rounded bg-gray-100 px-2 py-1">envflow inject</code>. Works with any tech stack.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-50 to-violet-50">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">Team-Friendly</h3>
              <p className="text-gray-600">
                Invite members, assign projects, control access levels. Perfect for small to medium teams.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-yellow-50 to-amber-50">
                <Zap className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">Lightning Fast Setup</h3>
              <p className="text-gray-600">
                Get started in minutes, not days. No complex configurations or infrastructure to manage.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-red-50 to-pink-50">
                <Server className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">Environment Profiles</h3>
              <p className="text-gray-600">
                Manage different sets for development, staging, and production. Keep them separate and secure.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-gray-50 to-slate-50">
                <Key className="h-6 w-6 text-gray-600" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">Version History</h3>
              <p className="text-gray-600">
                Track changes to variables. Rollback if needed. Know who changed what and when.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Don't Do Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-r from-gray-900 to-slate-900 p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-3xl font-bold">Clear Boundaries</h2>
              <p className="mx-auto max-w-2xl text-gray-300">
                We're focused on solving one problem really well.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-6 text-xl font-bold">What We Do</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 h-5 w-5 text-green-400" />
                    <span>Secure development variable management for small teams</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 h-5 w-5 text-green-400" />
                    <span>Simple CLI for local development environments</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 h-5 w-5 text-green-400" />
                    <span>Team collaboration with granular access control</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-1 h-5 w-5 text-green-400" />
                    <span>Development and staging environment management</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-6 text-xl font-bold">What We Don't Do</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <X className="mr-3 mt-1 h-5 w-5 text-red-400" />
                    <span>Production secrets management for large enterprises</span>
                  </li>
                  <li className="flex items-start">
                    <X className="mr-3 mt-1 h-5 w-5 text-red-400" />
                    <span>Complex infrastructure or Kubernetes secrets</span>
                  </li>
                  <li className="flex items-start">
                    <X className="mr-3 mt-1 h-5 w-5 text-red-400" />
                    <span>Compliance frameworks (SOC2, HIPAA, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <X className="mr-3 mt-1 h-5 w-5 text-red-400" />
                    <span>Replace your CI/CD pipeline secret management</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-12 text-center text-white">
            <h2 className="mb-6 text-3xl font-bold">Ready to Simplify Your Team's Workflow?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-blue-100">
              Join hundreds of developers who've stopped wasting time on environment variable chaos.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href="#" className="rounded-lg bg-white px-8 py-3 text-lg font-medium text-blue-600 hover:bg-gray-100">
                Start Free Trial
              </a>
              <a href="#" className="rounded-lg border border-white/30 bg-transparent px-8 py-3 text-lg font-medium text-white hover:bg-white/10">
                Schedule a Demo
              </a>
            </div>
            <p className="mt-8 text-sm text-blue-200">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  );
}