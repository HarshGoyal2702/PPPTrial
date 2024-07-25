import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import EventIcon from '@mui/icons-material/Event';
import Typography from '@mui/material/Typography';

const CustomTimeline = ({ items = [] }) => {
  return (
    <div>
      <Timeline position="alternate">
        {items.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color="text.secondary">
              {item.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <EventIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant='h6'>{item.title}</Typography>
              <Typography>{item.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default CustomTimeline;
