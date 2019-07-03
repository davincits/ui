import Container from './Container';
import { add } from './actions';
import {
  TOASTR_DEFAULT,
  TOASTR_INFO,
  TOASTR_SUCCESS,
  TOASTR_WARNING,
  TOASTR_DANGER,
} from './constants';

export default Container;

const Toast = params => add(params, TOASTR_DEFAULT);
const ToastInfo = params => add(params, TOASTR_INFO);
const ToastSuccess = params => add(params, TOASTR_SUCCESS);
const ToastWarning = params => add(params, TOASTR_WARNING);
const ToastDanger = params => add(params, TOASTR_DANGER);

export {
  Toast,
  ToastInfo,
  ToastSuccess,
  ToastWarning,
  ToastDanger,
};
