import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CaseStudyContent } from '@/components/sections/CaseStudyContent';
import { getProjectBySlug, projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.filter((p) => !p.comingSoon).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title.en,
    description: project.description.en,
    openGraph: {
      title: project.title.en,
      description: project.description.en,
      images: project.images[0] ? [project.images[0].en.light] : [],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || project.comingSoon) notFound();

  return <CaseStudyContent project={project} />;
}
