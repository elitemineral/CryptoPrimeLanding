import { hydrateRoot } from 'react-dom/client';
import { PageLayout } from './PageLayout';

export async function onRenderClient(pageContext) {
  const { Page } = pageContext;
  hydrateRoot(
    document.getElementById('root'),
    <PageLayout>
      <Page />
    </PageLayout>,
  );
}
