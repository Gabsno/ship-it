import { Route, Routes } from 'react-router-dom';
import { AppShell } from '@/components/AppShell';
import { HomePage } from '@/pages/HomePage';
import { ModulePage } from '@/pages/ModulePage';
import { LessonPage } from '@/pages/LessonPage';
import { BuildAlongPage } from '@/pages/BuildAlongPage';
import { GauntletPage } from '@/pages/GauntletPage';
import { GauntletSnippetPage } from '@/pages/GauntletSnippetPage';
import { SettingsPage } from '@/pages/SettingsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="module/:moduleId" element={<ModulePage />} />
        <Route path="lesson/:lessonId" element={<LessonPage />} />
        <Route path="build-along/:id" element={<BuildAlongPage />} />
        <Route path="gauntlet" element={<GauntletPage />} />
        <Route path="gauntlet/:snippetId" element={<GauntletSnippetPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
