import Alert from '../components/Alert';
import Autocomplete from '../components/Autocomplete';
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';
import Col from '../components/Grid/Col';
import Row from '../components/Grid/Row';
import Dialog from '../components/Dialog';
import DropArea from '../components/DropArea';
import DropDown from '../components/DropDown';
import FileField, { FILES_COUNT_ERROR, FILE_TYPE_ERROR, FILE_SIZE_ERROR } from '../components/FileField';
import FullSizeModal from '../components/FullSizeModal';
import Gallery from '../components/Gallery';
import LoadingDotted from '../components/LoadingDotted';
import LoadingSpinner from '../components/LoadingSpinner';
import Portal from '../components/Portal';
import RadioGroup from '../components/Radio/RadioGroup';
import Radio from '../components/Radio/Radio';
import Range from '../components/Range';
import Select from '../components/Select';
import Show from '../components/Show';
import Slider from '../components/Slider';
import Tabs from '../components/Tabs';
import TextField from '../components/TextField';
import Tooltip from '../components/Tooltip';
import MultiSelect from '../components/MultiSelect';
import List from '../components/List';
import ListItem from '../components/List/Item';
import Table, { Row as TR, Head as TH, Cell as TD } from '../components/Table';
import ToastrContainer, {
  Toast, ToastInfo, ToastSuccess, ToastWarning, ToastDanger,
} from '../components/Toastr';
import DialogsContainer, { showAlertDialog, showConfirmDialog, showCustomDialog } from '../components/CommonDialogs';
import Datepicker from '../components/Datepicker';
import DatePicker from '../components/Datepicker';
import Timepicker from '../components/Timepicker';
import TagsField from '../components/TagsField';
import TagsAutocomplete from '../components/TagsAutocomplete';
import Accordion from '../components/Accordion';

import ArrowLeft from '../components/icons/ArrowLeft';
import ArrowRight from '../components/icons/ArrowRight';
import Attention from '../components/icons/Attention';
import Bed from '../components/icons/Bed';
import Bell from '../components/icons/Bell';
import Broken from '../components/icons/Broken';
import Calendar from '../components/icons/Calendar';
import Caret from '../components/icons/Caret';
import Check from '../components/icons/Check';
import ChevronLeft from '../components/icons/ChevronLeft';
import ChevronRight from '../components/icons/ChevronRight';
import Clock from '../components/icons/Clock';
import Close from '../components/icons/Close';
import CloseFilled from '../components/icons/CloseFilled';
import CloseAnim from '../components/icons/CloseAnim';
import CloudBackup from '../components/icons/CloudBackup';
import Comment from '../components/icons/Comment';
import Cup from '../components/icons/Cup';
import Document from '../components/icons/Document';
import DocumentBlank from '../components/icons/DocumentBlank';
import Dollar from '../components/icons/Dollar';
import Done from '../components/icons/Done';
import Download from '../components/icons/Download';
import ExpandLess from '../components/icons/ExpandLess';
import ExpandMore from '../components/icons/ExpandMore';
import Favorite from '../components/icons/Favorite';
import Info from '../components/icons/Info';
import Minus from '../components/icons/Minus';
import NotAllowed from '../components/icons/NotAllowed';
import Parking from '../components/icons/Parking';
import Picture from '../components/icons/Picture';
import Plus from '../components/icons/Plus';
import Reception from '../components/icons/Reception';
import Restore from '../components/icons/Restore';
import Search from '../components/icons/Search';
import SearchNoResult from '../components/icons/SearchNoResult';
import Spinner from '../components/icons/Spinner';
import Star from '../components/icons/Star';
import Svg from '../components/icons/Svg';
import ThumbUp from '../components/icons/ThumbUp';
import Time from '../components/icons/Time';
import Unlink from '../components/icons/Unlink';
import User from '../components/icons/User';
import Verified from '../components/icons/Verified';
import WallCalendar from '../components/icons/WallCalendar';

const Tab = Tabs.Tab;
const TabList = Tabs.TabList;
const TabPanel = Tabs.TabPanel;
const showToast = Toast;
const showToastInfo = ToastInfo;
const showToastSuccess = ToastSuccess;
const showToastWarning = ToastWarning;
const showToastDanger = ToastDanger;
const AlertDialog = showAlertDialog;
const ConfirmDialog = showConfirmDialog;

const Icons = {
  ArrowLeft,
  ArrowRight,
  Attention,
  Bed,
  Bell,
  Broken,
  Calendar,
  Caret,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Close,
  CloseFilled,
  CloseAnim,
  CloudBackup,
  Comment,
  Cup,
  Document,
  DocumentBlank,
  Dollar,
  Done,
  Download,
  ExpandLess,
  ExpandMore,
  Favorite,
  Info,
  Minus,
  NotAllowed,
  Parking,
  Picture,
  Plus,
  Reception,
  Restore,
  Search,
  SearchNoResult,
  Spinner,
  Star,
  Svg,
  ThumbUp,
  Time,
  Unlink,
  User,
  Verified,
  WallCalendar
};

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
  Icons,
  LoadingDotted,
  LoadingSpinner,
  Portal,
  RadioGroup,
  Radio,
  Range,
  Row,
  Select,
  Show,
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
