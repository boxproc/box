import React from 'react';
import styled, { theme } from 'theme';

import {
  ArrowBackIcon,
  ArrowBoldDownIcon,
  ArrowToBottomIcon,
  CheckIcon,
  CloseIcon,
  DotsHorizontalIcon,
  MinusIcon,
} from 'components/Icons';

const eventsConsts = {
  pending: {
    color: theme.colors.gray,
    icon: (<DotsHorizontalIcon size="10" />),
  },
  submitted: {
    color: theme.colors.lightAccent,
    icon: (<ArrowBoldDownIcon size="12" />),
  },
  verified: {
    color: theme.colors.green,
    icon: (<CheckIcon size="10" />),
  },
  completed: {
    color: theme.colors.green,
    icon: (<ArrowToBottomIcon size="14" />),
  },
  revoked: {
    color: theme.colors.red,
    icon: (<MinusIcon size="10" />),
  },
  disputed: {
    color: theme.colors.red,
    icon: (<ArrowBackIcon size="14" />),
  },
  failed: {
    color: theme.colors.red,
    icon: (<CloseIcon size="14" />),
  },
  default: {
    color: theme.colors.lightGray,
  },
};

const renderIcon = (event: string) => {
  const eventConst = eventsConsts[event.toLocaleLowerCase()];
  return eventConst ? eventConst.icon : null;
};

const renderColor = (event: string) => {
  const eventConst = eventsConsts[event.toLocaleLowerCase()];
  return eventConst ? eventConst.color : eventsConsts.default.color;
};

interface ITimelineWrapper {
  event?: string;
}

const TimelineWrapper = styled.div<ITimelineWrapper>`
  display: flex;
  align-items: center;

  .date {
    font-size: 12px;
  }

  .event {
    font-size: 13px;
    font-weight: 500;
  }

  .circle {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    margin-left: 10px;
    color: ${theme.colors.white};
    border-radius: 50%;
    background-color: ${({ event }) => renderColor(event)};
    box-shadow: ${theme.shadows.aroundBox};
  }

  &:not(:first-child) {
    margin-top: 30px;

    .circle:before {
      content: "";
      width: 1px;
      height: 26px;
      background: ${eventsConsts.default.color};
      display: block;
      position: absolute;
      bottom: calc(100% + 2px);
      left: 50%;
      margin-left: -1px;
    }
  }
`;

interface ITimeline {
  items: Array<{
    date: string;
    event: string;
  }>;
}

const Timeline: React.FC<ITimeline> = ({ items }) => {
  return (
    <div>
      {items.length && items.map((item, index) => (
        <TimelineWrapper
          event={item.event}
          key={index}
        >
          <div className="date">{item.date}</div>
          <div className="circle" >
            {renderIcon(item.event)}
          </div>
          <div className="event">{item.event}</div>
        </TimelineWrapper>
      ))}
    </div>
  );
};

export default Timeline;
