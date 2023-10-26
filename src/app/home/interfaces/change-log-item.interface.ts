export interface ChangeLogItem {
  title: string;
  version: string;
  date: string;
  changes: string[];
  type: ChangeLogItemType;
}

interface ChangeLogItemType {
  type: logItemType;
  classColor: string;
}

type logItemType = 'feature' | 'added' | 'changed' | 'deprecated' | 'removed' | 'fixed' | 'security';
