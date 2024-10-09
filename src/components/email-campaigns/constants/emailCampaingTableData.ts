import { type Campaign } from '@/components/email-campaigns/types/Campaign'

const emailCampaigns: Campaign[] = [
  {
    name: 'SW Zero Personalisation 1',
    type: 'active',
    percentage: 30,
    date_info: 'Sent on 15 Apr 2023',
    sequence: '3 Sequences',
    sent: 30,
    clicked: 25,
    click_percentage: '80%',
    opened: 10,
    open_percentage: '30%',
    replied: 5,
    reply_percentage: '3%',
    positive_reply: 2,
    positive_reply_percentage: '20%'
  },
  {
    name: 'Untitled Campaign',
    type: 'active',
    percentage: 30,
    date_info: 'Drafted on 13 Apr 2023',
    sequence: '3 Sequences',
    sent: 30,
    clicked: 25,
    click_percentage: '80%',
    opened: 10,
    open_percentage: '30%',
    replied: 5,
    reply_percentage: '3%',
    positive_reply: 2,
    positive_reply_percentage: '20%'
  },
  {
    name: 'Untitled Campaign',
    type: 'active',
    percentage: 30,
    date_info: 'Stopped on 15 Apr 2023',
    sequence: '3 Sequences',
    sent: 30,
    clicked: 25,
    click_percentage: '80%',
    opened: 10,
    open_percentage: '30%',
    replied: 5,
    reply_percentage: '3%',
    positive_reply: 2,
    positive_reply_percentage: '20%'
  }
]

export default emailCampaigns
