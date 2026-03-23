import { Filter } from 'lucide-react';
import { getClasses } from '../utils/classes';

interface ClassFilterProps {
  selectedClass: string;
  onClassChange: (className: string) => void;
}

export function ClassFilter({ selectedClass, onClassChange }: ClassFilterProps) {
  const classes = getClasses();

  if (classes.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      <Filter className="w-4 h-4 text-[#8A8478]" />
      <select
        value={selectedClass}
        onChange={(e) => onClassChange(e.target.value)}
        className="px-3 py-2 border border-[#F0EBE1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F5C518] bg-[#FFFDF7]"
      >
        <option value="">전체 반</option>
        {classes.map(cls => (
          <option key={cls.id} value={cls.name}>
            {cls.name}
          </option>
        ))}
        <option value="no-class">반 미지정</option>
      </select>
    </div>
  );
}