import { PropsWithChildren, PureComponent } from 'react';
import cn from 'classnames';

import { PageContainer } from ':components';

import styles from './styles.module.scss';

interface Props {
  className?: string;
  containerClassName?: string;
  contentClassName?: string;
}

/**
 * @class
 * @description Page component
 */
export class Page extends PureComponent<PropsWithChildren<Props>> {
  public static get defaultProps() {
    return {
      hasFooter: true,
      hasHeader: true,
    };
  }

  public render() {
    const { children, className, containerClassName, contentClassName } = this.props;
    return (
      <div className={cn(styles.page, className)}>
        <PageContainer className={cn(styles.container, containerClassName)} contentClassName={contentClassName}>
          {children}
        </PageContainer>
      </div>
    );
  }
}
