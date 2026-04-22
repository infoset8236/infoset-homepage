interface Window {
  fullpage_api: {
    setAllowScrolling: (allow: boolean, direction?: string) => void;
    setKeyboardScrolling: (allow: boolean, direction?: string) => void;
    moveTo: (section: string | number) => void;
  };
}
