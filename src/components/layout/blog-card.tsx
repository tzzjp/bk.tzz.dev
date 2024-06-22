import moment from 'moment';

import { 
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "../ui/card";

interface BlogCardProps {
  slug: string;
  title: string;
  pubDate?: Date;
  description?: string;
}

export function BlogCard({slug, title, pubDate, description}: BlogCardProps) {
  return (
    <Card className='my-5'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>発表時間：{moment(pubDate).format('YYYY/MM/DD hh:mm')}</CardDescription>
      </CardHeader>
      <CardContent className='truncate'>{description}</CardContent>
      <CardFooter className='underline'>
        <a href={slug}>{`詳細を読む>>`}</a>
      </CardFooter>
    </Card>
    
  )
}