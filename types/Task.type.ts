export type ManagerTaskType = {
  image_url: null | string;
  job: null | string;
  last_name: string;
  mail: string | null;
  managers_task_id: number;
  name: string;
  userId: number;
};

export type TaskType = {
  additional_info?: string;
  deadline_date_unix?: Date;
  delayed: number;
  delivery_date?: Date;
  description?: string;
  end_date?: Date;
  end_date_unix?: number;
  highlighted: number;
  id?: number;
  initial_delivery_date?: Date;
  is_subtasks: boolean;
  last_task_recurrent?: any;
  mails?: any;
  managers: ManagerTaskType[];
  numbers?: any;
  priority: string;
  progress?: number;
  project_color: string;
  project_name: string;
  projects_id?: number;
  recurrence_rule: string;
  recurrence_until?: Date;
  reviewers: any[]; // Not specified in the given object
  start_date: null;
  start_date_unix: null;
  status: string;
  subtasks: any[]; // Not specified in the given object
  tasks_id?: number;
  title: string;
  url?: string;
  views: any[]; // Not specified in the given object
};

export type MinifiedTaskType = {
  delayed: number;
  delivery_date: Date;
  description?: string;
  end_date: Date;
  end_date_unix: number;
  id: number;
  initial_delivery_date?: Date;
  last_task_recurrent?: any;
  managers: ManagerTaskType[];
  priority: string;
  project_name: string;
  projects_id: number;
  start_date: null;
  start_date_unix: null;
  status: string;
  tasks_id?: number;
  title: string;
  tittle?: string;
};

export const EmptyTask = {
  additional_info: "",
  deadline_date_unix: undefined,
  delayed: 0,
  delivery_date: undefined,
  description: "",
  end_date: undefined,
  end_date_unix: undefined,
  highlighted: 0,
  initial_delivery_date: undefined,
  is_subtasks: false,
  last_task_recurrent: "",
  mails: "",
  managers: [],
  numbers: "",
  priority: "",
  progress: 0,
  project_color: "",
  project_name: "",
  projects_id: undefined,
  recurrence_rule: "",
  recurrence_until: undefined,
  reviewers: [], // Not specified in the given object
  start_date: null,
  start_date_unix: null,
  status: "",
  subtasks: [], // Not specified in the given object
  tasks_id: undefined,
  title: "",
  url: "",
  views: [], // Not specified in the given object
};
