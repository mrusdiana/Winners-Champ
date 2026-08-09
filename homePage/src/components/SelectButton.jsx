'use client'

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'

export default function SelectButton({ categories, categoryId, setCategoryId }) {
  const selected = categories.find((c) => c.id === categoryId) ?? null

  function handleChange(category) {
    setCategoryId(category ? category.id : "")
  }

  return (
    <Listbox value={selected} onChange={handleChange}>
      <div className="relative w-40">
        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white pr-2 pl-3 text-left">
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            <span className="block truncate text-neutral-600">{selected ? selected.name : "All Categories "}</span>
          </span>
          <ChevronUpDownIcon
            aria-hidden="true"
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 w-56 max-h-56 overflow-auto rounded-md bg-white py-1 text-base shadow-lg outline-1 outline-black/5 data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
        >
          <ListboxOption
            value={null}
            className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-black data-focus:text-white data-focus:outline-hidden"
          >
            <div className="flex items-center">
              <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">All Categories</span>
            </div>
            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-black group-not-data-selected:hidden group-data-focus:text-white">
              <CheckIcon aria-hidden="true" className="size-5" />
            </span>
          </ListboxOption>

          {categories.map((el) => (
            <ListboxOption
              key={el.id}
              value={el}
              className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-black data-focus:text-white data-focus:outline-hidden"
            >
              <div className="flex items-center">
                <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">{el.name}</span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-black group-not-data-selected:hidden group-data-focus:text-white">
                <CheckIcon aria-hidden="true" className="size-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}