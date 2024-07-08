import { Action } from '@reduxjs/toolkit';

export interface RejectedAction extends Action {
  error: Error;
}
