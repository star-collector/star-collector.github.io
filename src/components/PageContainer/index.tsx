import { PropsWithChildren, PureComponent } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface Props {
  className?: string;
  contentClassName?: string;
}

/**
 * @class
 * @description PageContainer component
 */
export class PageContainer extends PureComponent<PropsWithChildren<Props>> {
  public render() {
    const { children, className, contentClassName } = this.props;
    return (
      <div className={cn(styles.pageContainer, className)}>
        <div className={cn(styles.content, contentClassName)}>{children}</div>
      </div>
    );
  }
}
