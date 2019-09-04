import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';

import ArrowLeft from '../ui/icons/ArrowLeft';
import ArrowRight from '../ui/icons/ArrowRight';
import Attention from '../ui/icons/Attention';
import Bell from '../ui/icons/Bell';
import Broken from '../ui/icons/Broken';
import Caret from '../ui/icons/Caret';
import Check from '../ui/icons/Check';
import ChevronLeft from '../ui/icons/ChevronLeft';
import ChevronRight from '../ui/icons/ChevronRight';
import Clock from '../ui/icons/Clock';
import Close from '../ui/icons/Close';
import CloseAnim from '../ui/icons/CloseAnim';
import CloudBackup from '../ui/icons/CloudBackup';
import Comment from '../ui/icons/Comment';
import Cup from '../ui/icons/Cup';
import Document from '../ui/icons/Document';
import DocumentBlank from '../ui/icons/DocumentBlank';
import Dollar from '../ui/icons/Dollar';
import Download from '../ui/icons/Download';
import ExpandLess from '../ui/icons/ExpandLess';
import ExpandMore from '../ui/icons/ExpandMore';
import Favorite from '../ui/icons/Favorite';
import NotAllowed from '../ui/icons/NotAllowed';
import Parking from '../ui/icons/Parking';
import Picture from '../ui/icons/Picture';
import Reception from '../ui/icons/Reception';
import Restore from '../ui/icons/Restore';
import Search from '../ui/icons/Search';
import SearchNoResult from '../ui/icons/SearchNoResult';
import Spinner from '../ui/icons/Spinner';
import Star from '../ui/icons/Star';
import ThumbUp from '../ui/icons/ThumbUp';
import Unlink from '../ui/icons/Unlink';
import User from '../ui/icons/User';
import Verified from '../ui/icons/Verified';

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
              <Bell />
              <span className="icon-title">&lt;Bell /&gt;</span>
            </div>
            <div className="icon-container">
              <Broken />
              <span className="icon-title">&lt;Broken /&gt;</span>
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
              <ExpandMore />
              <span className="icon-title">&lt;ExpandMore /&gt;</span>
            </div>
            <div className="icon-container">
              <Favorite />
              <span className="icon-title">&lt;Favorite /&gt;</span>
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
              <ThumbUp />
              <span className="icon-title">&lt;ThumbUp /&gt;</span>
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
          </div>
        </div>
      )}
    </Container>
  ))