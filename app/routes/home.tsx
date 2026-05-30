import type { Route } from './+types/home';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { Link } from 'react-router';
import { appName } from '@/lib/shared';
import { baseOptions } from '@/lib/layout.shared';

export function meta({}: Route.MetaArgs) {
  return [
    { title: `Home | ${appName}` },
    {
      name: 'description',
      content:
        'Documentation for using ragemp-fivem-bridge to run RAGE:MP-style JavaScript gamemodes on FiveM.',
    },
  ];
}

export default function Home() {
  return (
    <HomeLayout {...baseOptions()}>
      <div className="p-4 flex flex-col items-center justify-center text-center flex-1">
        <h1 className="text-xl font-bold mb-2">RAGE:MP to FiveM Bridge Docs</h1>
        <p className="text-fd-muted-foreground mb-4">
          Learn standalone mode, server/client APIs, NUI/CEF runtime, RPC, plugins, and production configuration.
        </p>
        <Link
          className="text-sm bg-fd-primary text-fd-primary-foreground rounded-full font-medium px-4 py-2.5"
          to="/docs"
        >
          Open Docs
        </Link>
      </div>
    </HomeLayout>
  );
}
