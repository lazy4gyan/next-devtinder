"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, X, MapPin, Briefcase } from 'lucide-react';

interface ProfileCardProps {
  profile: {
    id: string;
    name: string;
    username: string;
    avatarUrl?: string;
    bio?: string;
    role?: string;
    skills: string[];
    location?: string;
  };
  onLike: (id: string) => void;
  onPass: (id: string) => void;
}

export function ProfileCard({ profile, onLike, onPass }: ProfileCardProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAction = (action: 'like' | 'pass') => {
    setIsAnimating(true);
    setTimeout(() => {
      if (action === 'like') {
        onLike(profile.id);
      } else {
        onPass(profile.id);
      }
    }, 200);
  };

  return (
    <Card className={`w-full max-w-sm transition-all duration-200 ${isAnimating ? 'scale-95 opacity-50' : ''}`}>
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={profile.avatarUrl} />
            <AvatarFallback>{profile.name.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{profile.name}</h3>
            <p className="text-sm text-muted-foreground">@{profile.username}</p>
            {profile.role && (
              <div className="flex items-center text-sm text-muted-foreground mt-1">
                <Briefcase className="h-3 w-3 mr-1" />
                {profile.role}
              </div>
            )}
            {profile.location && (
              <div className="flex items-center text-sm text-muted-foreground mt-1">
                <MapPin className="h-3 w-3 mr-1" />
                {profile.location}
              </div>
            )}
          </div>
        </div>

        {/* Bio */}
        {profile.bio && (
          <p className="text-sm text-muted-foreground mb-4">{profile.bio}</p>
        )}

        {/* Skills */}
        {profile.skills.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {profile.skills.slice(0, 6).map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {profile.skills.length > 6 && (
                <Badge variant="outline" className="text-xs">
                  +{profile.skills.length - 6} more
                </Badge>
              )}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => handleAction('pass')}
          >
            <X className="h-4 w-4 mr-2" />
            Pass
          </Button>
          <Button
            size="sm"
            className="flex-1"
            onClick={() => handleAction('like')}
          >
            <Heart className="h-4 w-4 mr-2" />
            Like
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
