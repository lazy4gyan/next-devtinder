"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Filter } from 'lucide-react';

export function FilterDrawer() {
  const [distance, setDistance] = useState([50]);
  const [role, setRole] = useState("");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter Profiles</SheetTitle>
          <SheetDescription>
            Customize your discovery preferences
          </SheetDescription>
        </SheetHeader>
        
        <div className="space-y-6 mt-6">
          {/* Distance */}
          <div className="space-y-2">
            <Label>Distance: {distance} km</Label>
            <Slider
              value={distance}
              onValueChange={setDistance}
              max={200}
              min={5}
              step={5}
              className="w-full"
            />
          </div>

          {/* Role */}
          <div className="space-y-2">
            <Label>Role</Label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger>
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="frontend">Frontend Developer</SelectItem>
                <SelectItem value="backend">Backend Developer</SelectItem>
                <SelectItem value="fullstack">Full Stack Developer</SelectItem>
                <SelectItem value="mobile">Mobile Developer</SelectItem>
                <SelectItem value="devops">DevOps Engineer</SelectItem>
                <SelectItem value="designer">UI/UX Designer</SelectItem>
                <SelectItem value="pm">Product Manager</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Apply Button */}
          <Button className="w-full">Apply Filters</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
