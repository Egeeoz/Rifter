'use client';
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

import { useState, SetStateAction, Dispatch } from 'react';
import { ChampionsResponse, Champion } from '../../types/types';

type ComboboxProps = {
  championData?: ChampionsResponse;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

export function Combobox({ championData, value, setValue }: ComboboxProps) {
  const [open, setOpen] = useState(false);

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
              {championList.length > 0 &&
                championList.map((champ) => (
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
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
