import { CampaignStatus } from '@/components/email-campaigns/types/Campaign'
import { EditPen, Warning, VideoPause } from '@element-plus/icons-vue'

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

  const progressIcon = (status: CampaignStatus) => {
    switch (status) {
      case CampaignStatus.STOPPED:
        return Warning
      case CampaignStatus.PAUSED:
        return VideoPause
      default:
        return EditPen
    }
  }

  return {
    getStausColor,
    progressIcon
  }
}

export default useCampaignTable
