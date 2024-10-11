export enum CampaignStatus {
  ACTIVE = 'active',
  STOPPED = 'stopped',
  DRAFT = 'draft',
  PAUSED = 'paused'
}

export type Campaign = {
  name: string
  status: CampaignStatus
  percentage: number
  date_info: string
  sequence: string
  sent: number
  clicked: number
  click_percentage: string
  opened: number
  open_percentage: string
  replied: number
  reply_percentage: string
  positive_reply: number
  positive_reply_percentage: string
}
