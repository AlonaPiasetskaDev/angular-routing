import { createAction, props } from '@ngrx/store';

export const addProfile = createAction(
  '[Profiles List Page] AddProfile',
  props<{ id: string; name: string; username: string; role: string}>()
);
