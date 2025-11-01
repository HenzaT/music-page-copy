import type { ReleaseData } from '../../data/discographyData';

interface ReleasesProps {
  data: ReleaseData[]
}

export default function ComingSoon({ data }: ReleasesProps) {
  return (
    <h1>Coming Soon</h1>
  )
}
