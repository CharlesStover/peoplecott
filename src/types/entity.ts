export default interface Entity {
  name: string;
  parent?: string;
  parentSources?: string[];
  reasons: string[];
  sources: string[];
}
