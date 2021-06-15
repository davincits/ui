import Alert from "../components/Alert";
import Autocomplete from "../components/Autocomplete";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import Col from "../components/Grid/Col";
import Row from "../components/Grid/Row";
import Dialog from "../components/Dialog";
import DropArea from "../components/DropArea";
import DropDown from "../components/DropDown";
import FileField, { FILES_COUNT_ERROR, FILE_TYPE_ERROR, FILE_SIZE_ERROR } from "../components/FileField";
import FullSizeModal from "../components/FullSizeModal";
import Gallery from "../components/Gallery";
import LoadingDotted from "../components/LoadingDotted";
import LoadingSpinner from "../components/LoadingSpinner";
import Portal from "../components/Portal";
import RadioGroup from "../components/Radio/RadioGroup";
import Radio from "../components/Radio/Radio";
import Range from "../components/Range";
import Select from "../components/Select";
import Slider from "../components/Slider";
import Tabs from "../components/Tabs";
import TextField from "../components/TextField";
import Tooltip from "../components/Tooltip";
import MultiSelect from "../components/MultiSelect";
import List from "../components/List";
import ListItem from "../components/List/Item";
import Table, { Row as TR, Head as TH, Cell as TD } from "../components/Table";
import ToastrContainer, {
  Toast, ToastInfo, ToastSuccess, ToastWarning, ToastDanger,
} from "../components/Toastr";
import DialogsContainer, { showAlertDialog, showConfirmDialog, showCustomDialog } from "../components/CommonDialogs";
import Datepicker from "../components/Datepicker";
import Timepicker from "../components/Timepicker";
import TagsField from "../components/TagsField";
import TagsAutocomplete from "../components/TagsAutocomplete";
import Accordion from "../components/Accordion";

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
  DialogsContainer,
  AlertDialog,
  ConfirmDialog,
  MultiSelect,
  List,
  ListItem,
  Datepicker,
  Datepicker as DatePicker,
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
