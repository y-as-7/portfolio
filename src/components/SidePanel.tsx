import type { Component, JSX } from 'solid-js';
import './SidePanel.css';

interface Props {
  title: string;
  className?: string;
  children: JSX.Element;
}

const SidePanel: Component<Props> = (props) => {
  return (
    <div class={`side-panel ${props.className || ''}`}>
      <div class="panel-header">
        <span class="header-text">{props.title}</span>
        <div class="header-deco"></div>
      </div>
      <div class="panel-content">
        {props.children}
      </div>
    </div>
  );
};

export default SidePanel;
