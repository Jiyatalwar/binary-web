import { createSupabaseBrowserClient } from '@/lib/supabase/client';

export interface HomepageContent {
  hero_title: string;
  hero_subtitle: string;
  whyus_title: string;
  whyus_subtitle: string;
  customer_title: string;
  customer_subtitle: string;
  customer_button_label: string;
  contact_title: string;
  contact_subtitle: string;
  contact_button_label: string;
}

export const DEFAULT_HOMEPAGE_CONTENT: HomepageContent = {
  hero_title: 'Transforming IT Infrastructure for Enterprise Growth',
  hero_subtitle: 'Empower your organization with next-generation networking, cloud-ready infrastructure, and secure connectivity solutions.',
  whyus_title: 'Why Choose Binary Global?',
  whyus_subtitle: 'Trusted IT Solutions Provider Driving Innovation & Business Success',
  customer_title: 'Partnering with Organizations to Deliver IT Excellence and Business Growth',
  customer_subtitle: 'Enterprise Cybersecurity, Cloud, Networking & Infrastructure Success Stories',
  customer_button_label: 'Read more',
  contact_title: 'Accelerate Digital Transformation with Binary Global',
  contact_subtitle: 'Leverage AI, Cloud Computing, Automation, and Expert Technology Consulting for Long-Term Success and Competitive Advantage.',
  contact_button_label: 'Book a demo',
};

export async function getHomepageContent(): Promise<HomepageContent> {
  const supabase = createSupabaseBrowserClient();
  if (!supabase) {
    return DEFAULT_HOMEPAGE_CONTENT;
  }

  const { data, error } = await supabase.from('homepage_content').select('key, value');
  if (error || !data) {
    return DEFAULT_HOMEPAGE_CONTENT;
  }

  const contentMap = data.reduce<Record<string, string>>((acc, item) => {
    acc[item.key] = item.value;
    return acc;
  }, {});

  return {
    hero_title: contentMap.hero_title || DEFAULT_HOMEPAGE_CONTENT.hero_title,
    hero_subtitle: contentMap.hero_subtitle || DEFAULT_HOMEPAGE_CONTENT.hero_subtitle,
    whyus_title: contentMap.whyus_title || DEFAULT_HOMEPAGE_CONTENT.whyus_title,
    whyus_subtitle: contentMap.whyus_subtitle || DEFAULT_HOMEPAGE_CONTENT.whyus_subtitle,
    customer_title: contentMap.customer_title || DEFAULT_HOMEPAGE_CONTENT.customer_title,
    customer_subtitle: contentMap.customer_subtitle || DEFAULT_HOMEPAGE_CONTENT.customer_subtitle,
    customer_button_label: contentMap.customer_button_label || DEFAULT_HOMEPAGE_CONTENT.customer_button_label,
    contact_title: contentMap.contact_title || DEFAULT_HOMEPAGE_CONTENT.contact_title,
    contact_subtitle: contentMap.contact_subtitle || DEFAULT_HOMEPAGE_CONTENT.contact_subtitle,
    contact_button_label: contentMap.contact_button_label || DEFAULT_HOMEPAGE_CONTENT.contact_button_label,
  };
}

export async function saveHomepageContent(values: Partial<HomepageContent>) {
  const supabase = createSupabaseBrowserClient();
  if (!supabase) {
    return { error: new Error('Supabase environment variables are missing.') };
  }

  const rows = Object.entries(values).map(([key, value]) => ({
    key,
    value: String(value),
  }));

  const { error } = await supabase.from('homepage_content').upsert(rows, { onConflict: 'key' });
  return { error };
}
