import Alert from "./Alert";
import Autocomplete from "./Autocomplete";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Col from "./Grid/Col";
import Row from "./Grid/Row";
import Dialog from "./Dialog";
import DropArea from "./DropArea";
import DropDown from "./DropDown";
import FileField, { FILES_COUNT_ERROR, FILE_TYPE_ERROR, FILE_SIZE_ERROR } from "./FileField";
import FullSizeModal from "./FullSizeModal";
import Gallery from "./Gallery";
import LoadingDotted from "./LoadingDotted";
import LoadingSpinner from "./LoadingSpinner";
import Portal from "./Portal";
import RadioGroup from "./Radio/RadioGroup";
import Radio from "./Radio/Radio";
import Range from "./Range";
import Select from "./Select";
import Slider from "./Slider";
import Tabs from "./Tabs";
import TextField from "./TextField";
import Tooltip from "./Tooltip";
import MultiSelect from "./MultiSelect";
import List from "./List";
import ListItem from "./List/Item";
import Table, { Row as TR, Head as TH, Cell as TD } from "./Table";
import ToastrContainer, {
  Toast, ToastInfo, ToastSuccess, ToastWarning, ToastDanger,
} from "./Toastr";
import DialogsContainer, { showAlertDialog, showConfirmDialog, showCustomDialog } from "./CommonDialogs";
import Datepicker from "./Datepicker";
import DatePicker from "./Datepicker";
import Timepicker from "./Timepicker";
import TagsField from "./TagsField";
import TagsAutocomplete from "./TagsAutocomplete";
import Accordion from "./Accordion";

const { Tab } = Tabs;
const { TabList } = Tabs;
const { TabPanel } = Tabs;
const showToast = Toast;
const showToastInfo = ToastInfo;
const showToastSuccess = ToastSuccess;
const showToastWarning = ToastWarning;
const showToastDanger = ToastDanger;
const AlertDialog = showAlertDialog;
const ConfirmDialog = showConfirmDialog;

export {
  Accordion,
  Alert,
  Autocomplete,
  Button,
  CheckBox,
  Col,
  Dialog,
  DropArea,
  DropDown,
  FileField,
  FullSizeModal,
  Gallery,
  LoadingDotted,
  LoadingSpinner,
  Portal,
  RadioGroup,
  Radio,
  Range,
  Row,
  Select,
  Slider,
  Tabs,
  TextField,
  Tooltip,
  Table,
  TR,
  TH,
  TD,
  ToastrContainer,
  Toast,
  ToastInfo,
  ToastSuccess,
  ToastWarning,
  ToastDanger,
  DialogsContainer,
  AlertDialog,
  ConfirmDialog,
  MultiSelect,
  List,
  ListItem,
  Datepicker,
  DatePicker,
  Timepicker,
  TagsField,
  TagsAutocomplete,
  Tab,
  TabList,
  TabPanel,
  showToast,
  showToastInfo,
  showToastSuccess,
  showToastWarning,
  showToastDanger,
  showAlertDialog,
  showConfirmDialog,
  showCustomDialog,
  FILES_COUNT_ERROR,
  FILE_TYPE_ERROR,
  FILE_SIZE_ERROR,
};
