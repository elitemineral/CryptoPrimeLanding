import { ArrowIcon } from './arrowIcon/ArrowIcon';
import { ArrowUpRightIcon } from './arrowUpRightIcon/ArrowUpRightIcon';
import { BotIcon } from './botIcon/BotIcon';
import { FacebookIcon } from './facebookIcon/FacebookIcon';
import { GithubIcon } from './githubIcon/GithubIcon';
import { LinkedinIcon } from './linkedinIcon/LinkedinIcon';
import { ProxyIcon } from './proxyIcon/ProxyIcon';
import { ScreenIcon } from './screenIcon/ScreenIcon';
import { YoutubeIcon } from './youtubeIcon/YoutubeIcon';

export function Icon({ type, className }) {
  const render = {
    [types.arrow]: <ArrowIcon className={className} />,
    [types.arrowUpRight]: <ArrowUpRightIcon className={className} />,
    [types.bot]: <BotIcon className={className} />,
    [types.facebook]: <FacebookIcon className={className} />,
    [types.github]: <GithubIcon className={className} />,
    [types.linkedin]: <LinkedinIcon className={className} />,
    [types.proxy]: <ProxyIcon className={className} />,
    [types.screen]: <ScreenIcon className={className} />,
    [types.youtube]: <YoutubeIcon className={className} />,
  };

  return render[type] ?? null;
}

const types = {
  arrow: 'arrow',
  arrowUpRight: 'arrowUpRight',
  bot: 'bot',
  facebook: 'facebook',
  github: 'github',
  linkedin: 'linkedin',
  proxy: 'proxy',
  screen: 'screen',
  youtube: 'youtube',
};

Icon.types = types;
