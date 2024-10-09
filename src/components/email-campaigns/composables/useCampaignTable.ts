import { CampaignStatus } from '@/components/email-campaigns/types/Campaign'

const useCampaignTable = () => {
  const getStausColor = (status: CampaignStatus): string => {
    switch (status) {
      case CampaignStatus.ACTIVE:
        return '#5ECA39'
      case CampaignStatus.STOPPED:
        return '#CB4B4B'
      case CampaignStatus.PAUSED:
        return '#DD9553'
      default:
        return '#B7BBD4'
    }
  }

  return {
    getStausColor
  }
}

export default useCampaignTable
