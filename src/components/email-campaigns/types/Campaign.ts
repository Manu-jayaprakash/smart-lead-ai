export type Campaign = {
  name: string
  type: 'active' | 'stopped' | 'draft'
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
