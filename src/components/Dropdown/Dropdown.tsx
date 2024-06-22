import React, { useState, useRef, useEffect } from "react";
import iconDown from "../../assets/icon-dropdown.svg";
import { DropDownItem, DropDownProps } from "../../types";

const DropDown: React.FC<DropDownProps> = ({ buttonLabel, items, onItemSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [dropdownItems, setDropdownItems] = useState<DropDownItem[]>(items);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleItemClick = (item: DropDownItem) => {
    const updatedItems = dropdownItems.map((dropdownItem) => ({
      ...dropdownItem,
      isChecked: item.label === dropdownItem.label ? !dropdownItem.isChecked : false,
    }));
    setDropdownItems(updatedItems);
    setSelectedItem(item.label);
    if (onItemSelect) {
      onItemSelect(item.label);
    }
    setIsOpen(true);
  };

  return (
    <div className='relative ' ref={dropdownRef}>
      <button
        type='button'
        className='flex items-center justify-between gap-4 font-bold text-gray-600 bg-transparent text-body-1'
        onClick={handleToggle}
      >
        {buttonLabel}
        <img src={iconDown} alt='' />
      </button>

      {isOpen && (
        <div className='absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-44'>
          <ul className='text-gray-700 text-body-1'>
            {dropdownItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(item)}
                className={`${index !== items.length - 1 ? "border-b border-gray-200 " : ""}  ${
                  selectedItem === item.label ? "text-purple" : ""
                } block px-4 py-2 hover:bg-gray-100`}
              >
                {item.withCheckbox && (
                  <input
                    type='checkbox'
                    name='checkbo'
                    checked={item.isChecked}
                    className='mr-2 accent-purple'
                    readOnly
                  />
                )}
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
