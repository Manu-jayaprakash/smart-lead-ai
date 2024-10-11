import { type Campaign, CampaignStatus } from '@/components/email-campaigns/types/Campaign'

const emailCampaigns: Campaign[] = [
  {
    name: 'SW Zero Personalisation 1',
    status: CampaignStatus.ACTIVE,
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
    status: CampaignStatus.DRAFT,
    percentage: 0,
    date_info: 'Drafted on 13 Apr 2023',
    sequence: '3 Sequences',
    sent: 0,
    clicked: 0,
    click_percentage: '0.0%',
    opened: 0,
    open_percentage: '0.0%',
    replied: 0,
    reply_percentage: '0.0%',
    positive_reply: 0,
    positive_reply_percentage: '0.0%'
  },
  {
    name: 'Untitled Campaign',
    status: CampaignStatus.STOPPED,
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
  },
  {
    name: 'SW Zero Personalisation 3',
    status: CampaignStatus.PAUSED,
    percentage: 30,
    date_info: 'Paused on 15 Apr 2023',
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
    name: 'SW Zero Personalisation 3',
    status: CampaignStatus.ACTIVE,
    percentage: 60,
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
  }
]

export default emailCampaigns
