export interface ColorSelectorModel {
  onChange: (color: string) => void;
  initialColor: string;
  options: string[];
}
