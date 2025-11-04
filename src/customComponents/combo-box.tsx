'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { ChampionsResponse, Champion } from '../../types/types';

export function Combobox(props?: { championData?: ChampionsResponse }) {
  const championData = props?.championData;
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  // Use only the passed-in data; fallback to empty array
  const championList: Champion[] = Object.values(championData?.data ?? {});

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
        >
          <span className="truncate">
            {value
              ? championList.find((c) => c.id === value)?.name ?? value
              : championList.length > 0
              ? championList[0].name
              : 'Select champion...'}
          </span>
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="p-0 bg-[var(--background)]">
        <Command>
          <CommandInput placeholder="Search champions..." className="h-9" />
          <CommandList>
            <CommandEmpty>No Champions found.</CommandEmpty>
            <CommandGroup>
              {championList.length > 0
                ? championList.map((champ) => (
                    <CommandItem
                      key={champ.id}
                      value={champ.id}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? '' : currentValue);
                        setOpen(false);
                      }}
                    >
                      {champ.name}
                      <Check
                        className={cn(
                          'ml-auto',
                          value === champ.id ? 'opacity-100' : 'opacity-0'
                        )}
                      />
                    </CommandItem>
                  ))
                : [
                    { value: 'next.js', label: 'Next.js' },
                    { value: 'sveltekit', label: 'SvelteKit' },
                  ].map((fw) => (
                    <CommandItem
                      key={fw.value}
                      value={fw.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? '' : currentValue);
                        setOpen(false);
                      }}
                    >
                      {fw.label}
                      <Check
                        className={cn(
                          'ml-auto',
                          value === fw.value ? 'opacity-100' : 'opacity-0'
                        )}
                      />
                    </CommandItem>
                  ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
