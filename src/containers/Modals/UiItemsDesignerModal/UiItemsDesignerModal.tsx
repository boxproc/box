import React from 'react';
import GridLayout, { Layout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';

import { Flex } from '@rebass/grid';

import { Button, CloseIcon, Hint, Hr, Modal, PlusIcon } from 'components';
import { UiItemsWrapper } from './UiItemsWrapper';

import { modalNamesConst } from 'consts';
import { withModal, WithModalProps } from 'HOCs';

import { HandleUpdateUiItems, UiItemsGroup, UiItemsGroupItem } from 'store/domains';

interface UiItemsDesignerModalProps extends WithModalProps {
  uiItemsGroups: Array<UiItemsGroup>;
  updateUiItems: HandleUpdateUiItems;
}

const modalName = modalNamesConst.UI_ITEMS_DESIGNER;

const UiItemsDesignerModal: React.FC<UiItemsDesignerModalProps> = ({
  uiItemsGroups = {},
  closeModal,
  updateUiItems,
}) => {
  const [groups, setGroups] = React.useState(uiItemsGroups);
  const [activeGroupIndex, setActiveGroupIndex] = React.useState(null);

  const itemsGroups = React.useMemo(
    () => {
      const values = Object.values(groups) as Array<UiItemsGroup>;

      values.sort((a, b) => a.sequenceNumber > b.sequenceNumber ? 1 : -1);
      return values.map((group, i) => {
        return {
          name: group.groupName,
          items: group.items,
          layout: group.items.map((item, j) => {
            return { i: item.id, x: i, y: j, w: 1, h: 1 };
          }),
        };
      });
    },
    [groups]
  );

  const handleAddSeparator = React.useCallback(
    (groupName) => {
      const currentGroup = uiItemsGroups[groupName];
      const { items } = currentGroup;
      const separators = items.filter((item: UiItemsGroupItem) => item.separator);

      items.push({
        id: `${groupName}/separator_${separators.length + 1}`,
        groupName,
        name: `Separator`,
        sequenceNumber: items.length,
        separator: true,
      });

      setGroups({
        ...groups,
        [groupName]: currentGroup,
      });
    },
    [groups, uiItemsGroups]
  );

  const handleRemoveSeparator = React.useCallback(
    (groupName, id) => {
      const currentGroup = uiItemsGroups[groupName];
      let { items } = currentGroup;

      items = items.filter((item: UiItemsGroupItem) => item.id !== id);

      currentGroup.items = items;

      setGroups({
        ...groups,
        [groupName]: currentGroup,
      });
    },
    [groups, uiItemsGroups]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  const handleLayoutChange = React.useCallback(
    (layout: Layout[], oldItem: Layout, newItem: Layout) => {
      setActiveGroupIndex(null);

      if (oldItem.y === newItem.y) {
        return null;
      }

      const uiItems = layout.map(item => {
        return {
          id: item.i,
          sequenceNumber: item.y,
        };
      });

      updateUiItems(uiItems);
    },
    [updateUiItems]
  );

  return (
    <Modal
      name={modalName}
      title="UI Items Designer"
      containerWidthAuto={true}
    >
      <UiItemsWrapper>
        <div className={`ui-items ${activeGroupIndex ? 'is-active' : ''}`}>
          {itemsGroups && itemsGroups.map(
            (group, index) => {
              if (!group.items.length) {
                return null;
              }

              return (
                <div
                  className={`ui-items__group ${activeGroupIndex === index ? 'is-active' : ''}`}
                  key={index}
                >
                  <div className="ui-items__title">
                    {group.name}
                    <span
                      className="ui-items__icon"
                      onClick={() => handleAddSeparator(group.name)}
                    >
                      <PlusIcon size="16" />
                      <Hint
                        text="Add separator"
                        icon={false}
                        position="top"
                      />
                    </span>
                  </div>
                  {group.layout && (
                    <GridLayout
                      layout={group.layout}
                      cols={1}
                      rowHeight={31}
                      width={200}
                      isResizable={false}
                      containerPadding={[0, 0]}
                      onDragStart={() => setActiveGroupIndex(index)}
                      onDragStop={handleLayoutChange}
                    >
                      {group.items.map(
                        item => {
                          const { id, name, separator } = item;

                          return (
                            <div
                              key={id}
                              className={`ui-items__item ${separator
                                ? 'ui-items__item--separator'
                                : ''}`
                              }
                            >
                              {name}
                              {separator && (
                                <span
                                  className="ui-items__icon"
                                  onClick={() => handleRemoveSeparator(group.name, id)}
                                >
                                  <CloseIcon size="12" />
                                </span>
                              )}
                            </div>
                          );
                        }
                      )}
                    </GridLayout>
                  )}
                </div>
              );
            }
          )}</div>
      </UiItemsWrapper>
      <Hr />
      <Flex justifyContent="flex-end">
        <Button
          text="close"
          onClick={handleOnCancel}
        />
      </Flex>
    </Modal>
  );
};

export default withModal(UiItemsDesignerModal);
