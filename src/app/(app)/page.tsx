"use client";

import { useState } from 'react';
import { ProfileCard } from '@/components/feed/profile-card';
import { FilterDrawer } from '@/components/feed/filter-drawer';
import { toast } from 'sonner';

// Mock data
const mockProfiles = [
  {
    id: '1',
    name: 'Sarah Chen',
    username: 'sarahc',
    avatarUrl: '',
    bio: 'Full-stack developer passionate about React and Node.js. Looking for collaboration on open source projects.',
    role: 'Full Stack Developer',
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Docker', 'AWS'],
    location: 'San Francisco, CA',
  },
  {
    id: '2',
    name: 'Alex Rodriguez',
    username: 'alexr',
    avatarUrl: '',
    bio: 'Mobile app developer with 5+ years experience. Love building beautiful iOS and Android apps.',
    role: 'Mobile Developer',
    skills: ['React Native', 'Swift', 'Kotlin', 'Flutter', 'Firebase'],
    location: 'Austin, TX',
  },
  {
    id: '3',
    name: 'Emily Johnson',
    username: 'emilyj',
    avatarUrl: '',
    bio: 'UI/UX Designer who codes. Creating user-centered designs and prototypes.',
    role: 'UI/UX Designer',
    skills: ['Figma', 'Adobe XD', 'HTML', 'CSS', 'JavaScript', 'Design Systems'],
    location: 'New York, NY',
  },
];

export default function DiscoveryPage() {
  const [profiles, setProfiles] = useState(mockProfiles);

  const handleLike = (id: string) => {
    const profile = profiles.find(p => p.id === id);
    if (profile) {
      toast.success(`You liked ${profile.name}!`);
      setProfiles(prev => prev.filter(p => p.id !== id));
    }
  };

  const handlePass = (id: string) => {
    const profile = profiles.find(p => p.id === id);
    if (profile) {
      toast(`You passed on ${profile.name}`);
      setProfiles(prev => prev.filter(p => p.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Discovery</h1>
          <p className="text-muted-foreground">Find developers to connect with</p>
        </div>
        <FilterDrawer />
      </div>

      {/* Profile Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {profiles.length > 0 ? (
          profiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              onLike={handleLike}
              onPass={handlePass}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-lg font-medium">No more profiles</h3>
            <p className="text-muted-foreground">Check back later for new matches!</p>
          </div>
        )}
      </div>
    </div>
  );
}
