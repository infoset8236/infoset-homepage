import { create } from 'zustand';
import type { SectionId } from '../pages/Main/Home.schema';

interface SectionState {
    activeSection: SectionId;
    setActiveSection: (section: SectionId) => void;
}

export const useSectionStore = create<SectionState>((set) => ({
    activeSection: 'hero',
    setActiveSection: (section) => set({ activeSection: section }),
}));
