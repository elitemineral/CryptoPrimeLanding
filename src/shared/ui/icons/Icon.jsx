import { ArrowIcon } from './arrowIcon/ArrowIcon';
import { BotIcon } from './botIcon/BotIcon';
import { ProxyIcon } from './proxyIcon/ProxyIcon';
import { ScreenIcon } from './screenIcon/ScreenIcon';

export function Icon({ type, className }) {
  const render = {
    [types.arrow]: <ArrowIcon className={className} />,
    [types.bot]: <BotIcon className={className} />,
    [types.proxy]: <ProxyIcon className={className} />,
    [types.screen]: <ScreenIcon className={className} />,
  };

  return render[type] ?? null;
}

const types = {
  arrow: 'arrow',
  bot: 'bot',
  proxy: 'proxy',
  screen: 'screen',
};

Icon.types = types;
