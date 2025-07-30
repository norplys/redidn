"use client";

import {
  Button,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";
import { RiArrowDropDownLine } from "react-icons/ri";

export function HomeFilter() {
  return (
    <div className="flex border-b border-border w-full pb-4 pt-2 gap-2 items-center">
      <SortFilterSelect />
      <NationFilterSelect />
      <ViewSelect />
    </div>
  );
}

function SortFilterSelect() {
  return (
    <Select placeholder="Best" className="text-sm">
      <Button className="flex items-center">
        <SelectValue />
        <span aria-hidden="true">
          <RiArrowDropDownLine className="text-xl" />
        </span>
      </Button>
      <Popover>
        <ListBox>
          <ListBoxItem>Cat</ListBoxItem>
          <ListBoxItem>Dog</ListBoxItem>
          <ListBoxItem>Kangaroo</ListBoxItem>
          <ListBoxItem>Panda</ListBoxItem>
          <ListBoxItem>Snake</ListBoxItem>
        </ListBox>
      </Popover>
    </Select>
  );
}

function NationFilterSelect() {
  return (
    <Select placeholder="Nation" className="text-sm">
      <Button className="flex items-center">
        <SelectValue />
        <span aria-hidden="true">
          <RiArrowDropDownLine className="text-xl" />
        </span>
      </Button>
      <Popover>
        <ListBox>
          <ListBoxItem>Cat</ListBoxItem>
          <ListBoxItem>Dog</ListBoxItem>
          <ListBoxItem>Kangaroo</ListBoxItem>
          <ListBoxItem>Panda</ListBoxItem>
          <ListBoxItem>Snake</ListBoxItem>
        </ListBox>
      </Popover>
    </Select>
  );
}

function ViewSelect() {
  return (
    <Select placeholder="View" className="text-sm">
      <Button className="flex items-center">
        <SelectValue />
        <span aria-hidden="true">
          <RiArrowDropDownLine className="text-xl" />
        </span>
      </Button>
      <Popover>
        <ListBox>
          <ListBoxItem>Cat</ListBoxItem>
          <ListBoxItem>Dog</ListBoxItem>
          <ListBoxItem>Kangaroo</ListBoxItem>
          <ListBoxItem>Panda</ListBoxItem>
          <ListBoxItem>Snake</ListBoxItem>
        </ListBox>
      </Popover>
    </Select>
  );
}
