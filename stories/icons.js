import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';

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

storiesOf('Icons', module)
  .add('common', () => (
    <Container>
      {({ value = '#333333', onChange }) => (
        <div>
          <div>
            <input type="color" value={value} onChange={({ target: { value } }) => onChange(value)}/>
          </div>
          <div className="icons-contaniner" style={{ color: value }}>
            <div className="icon-container">
              <ArrowLeft />
              <span className="icon-title">&lt;ArrowLeft /&gt;</span>
            </div>
            <div className="icon-container">
              <ArrowRight />
              <span className="icon-title">&lt;ArrowRight /&gt;</span>
            </div>
            <div className="icon-container">
              <Attention />
              <span className="icon-title">&lt;Attention /&gt;</span>
            </div>
            <div className="icon-container">
              <Bed />
              <span className="icon-title">&lt;Bed /&gt;</span>
            </div>
            <div className="icon-container">
              <Bell />
              <span className="icon-title">&lt;Bell /&gt;</span>
            </div>
            <div className="icon-container">
              <Broken />
              <span className="icon-title">&lt;Broken /&gt;</span>
            </div>
            <div className="icon-container">
              <Calendar />
              <span className="icon-title">&lt;Calendar /&gt;</span>
            </div>
            <div className="icon-container">
              <Caret />
              <span className="icon-title">&lt;Caret /&gt;</span>
            </div>
            <div className="icon-container">
              <Check />
              <span className="icon-title">&lt;Check /&gt;</span>
            </div>
            <div className="icon-container">
              <ChevronLeft />
              <span className="icon-title">&lt;ChevronLeft /&gt;</span>
            </div>
            <div className="icon-container">
              <ChevronRight />
              <span className="icon-title">&lt;ChevronRight /&gt;</span>
            </div>
            <div className="icon-container">
              <Clock />
              <span className="icon-title">&lt;Clock /&gt;</span>
            </div>
            <div className="icon-container">
              <Close />
              <span className="icon-title">&lt;Close /&gt;</span>
            </div>
            <div className="icon-container">
              <CloseAnim />
              <span className="icon-title">&lt;CloseAnim /&gt;</span>
            </div>
            <div className="icon-container">
              <CloudBackup />
              <span className="icon-title">&lt;CloudBackup /&gt;</span>
            </div>
            <div className="icon-container">
              <Comment />
              <span className="icon-title">&lt;Comment /&gt;</span>
            </div>
            <div className="icon-container">
              <Cup />
              <span className="icon-title">&lt;Cup /&gt;</span>
            </div>
            <div className="icon-container">
              <Document />
              <span className="icon-title">&lt;Document /&gt;</span>
            </div>
            <div className="icon-container">
              <DocumentBlank />
              <span className="icon-title">&lt;DocumentBlank /&gt;</span>
            </div>
            <div className="icon-container">
              <Dollar />
              <span className="icon-title">&lt;Dollar /&gt;</span>
            </div>
            <div className="icon-container">
              <Done />
              <span className="icon-title">&lt;Done /&gt;</span>
            </div>
            <div className="icon-container">
              <Download />
              <span className="icon-title">&lt;Download /&gt;</span>
            </div>
            <div className="icon-container">
              <ExpandLess />
              <span className="icon-title">&lt;ExpandLess /&gt;</span>
            </div>
            <div className="icon-container">
              <ExpandMore />
              <span className="icon-title">&lt;ExpandMore /&gt;</span>
            </div>
            <div className="icon-container">
              <Favorite />
              <span className="icon-title">&lt;Favorite /&gt;</span>
            </div>
            <div className="icon-container">
              <Info />
              <span className="icon-title">&lt;Info /&gt;</span>
            </div>
            <div className="icon-container">
              <Minus />
              <span className="icon-title">&lt;Minus /&gt;</span>
            </div>
            <div className="icon-container">
              <NotAllowed />
              <span className="icon-title">&lt;NotAllowed /&gt;</span>
            </div>
            <div className="icon-container">
              <Parking />
              <span className="icon-title">&lt;Parking /&gt;</span>
            </div>
            <div className="icon-container">
              <Picture />
              <span className="icon-title">&lt;Picture /&gt;</span>
            </div>
            <div className="icon-container">
              <Plus />
              <span className="icon-title">&lt;Plus /&gt;</span>
            </div>
            <div className="icon-container">
              <Reception />
              <span className="icon-title">&lt;Reception /&gt;</span>
            </div>
            <div className="icon-container">
              <Restore />
              <span className="icon-title">&lt;Restore /&gt;</span>
            </div>
            <div className="icon-container">
              <Search />
              <span className="icon-title">&lt;Search /&gt;</span>
            </div>
            <div className="icon-container">
              <SearchNoResult />
              <span className="icon-title">&lt;SearchNoResult /&gt;</span>
            </div>
            <div className="icon-container">
              <Spinner />
              <span className="icon-title">&lt;Spinner /&gt;</span>
            </div>
            <div className="icon-container">
              <Star />
              <span className="icon-title">&lt;Star /&gt;</span>
            </div>
            <div className="icon-container">
              <Svg />
              <span className="icon-title">&lt;Svg /&gt;</span>
            </div>
            <div className="icon-container">
              <ThumbUp />
              <span className="icon-title">&lt;ThumbUp /&gt;</span>
            </div>
            <div className="icon-container">
              <Time />
              <span className="icon-title">&lt;Time /&gt;</span>
            </div>
            <div className="icon-container">
              <Unlink />
              <span className="icon-title">&lt;Unlink /&gt;</span>
            </div>
            <div className="icon-container">
              <User />
              <span className="icon-title">&lt;User /&gt;</span>
            </div>
            <div className="icon-container">
              <Verified />
              <span className="icon-title">&lt;Verified /&gt;</span>
            </div>
            <div className="icon-container">
              <WallCalendar />
              <span className="icon-title">&lt;WallCalendar /&gt;</span>
            </div>
          </div>
        </div>
      )}
    </Container>
  ))