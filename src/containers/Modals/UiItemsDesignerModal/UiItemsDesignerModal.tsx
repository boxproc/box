import React from 'react';
import GridLayout, { Layout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';

import { Flex } from '@rebass/grid';

import styled from 'theme';

import { Button, CloseIcon, Hint, Hr, Modal, PlusIcon } from 'components';

import { modalNamesConst } from 'consts';
import { withModal, WithModalProps } from 'HOCs';

import { UiItemsGroup, UiItemsGroupItem } from 'store/domains';

const UiItemsWrapper = styled.div`
  .ui-items {
    display: flex;
    align-items: flex-start;
    margin: 0 -5px 30px;
    color: ${({ theme }) => theme.colors.darkGray};

    &__group {
      width: 210px;
    }

    &__title {
      position: relative;
      padding: 8px 25px 6px 5px;
      margin-bottom: 20px;
      font-weight: 500;
      font-size: 13px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
      color: ${({ theme }) => theme.colors.gray};
      text-align: center;
      text-transform: uppercase;

      .ui-items__icon {
        right: 8px;
      }
    }

    &__item {
      position: relative;
      padding: 6px 5px 8px;
      margin: 0 5px 5px;
      background-color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.lightGray};
      border-radius: 2px;
      font-size: 13px;
      cursor: move;
      text-transform: capitalize;
      user-select: none;

      &--separator {
        padding-right: 25px;
        background-color: ${({ theme }) => theme.colors.lighterGray};
        color: ${({ theme }) => theme.colors.gray};
      }

      &:hover {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.black};
        border-color: ${({ theme }) => theme.colors.normalAccent};
        box-shadow: ${({ theme }) => theme.shadows.normalBox};
      }
    }

    &__icon {
      position: absolute;
      right: 5px;
      top: 50%;
      margin-top: -11px;
      padding: 5px;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.gray};
      font-size: 0;

      &:hover {
        color: ${({ theme }) => theme.colors.normalAccent};
      }
    }
  }

  .react-grid-item.react-grid-placeholder {
    background: ${({ theme }) => theme.colors.normalAccent};
    opacity: 1;
    border-radius: 2px;
  }
`;

interface UiItemsDesignerModalProps extends WithModalProps {
  uiItemsGroups: Array<{
    groupName: string;
    sequenceNumber: number;
    items: Array<UiItemsGroupItem>;
  }>;
}

const modalName = modalNamesConst.UI_ITEMS_DESIGNER;

const UiItemsDesignerModal: React.FC<UiItemsDesignerModalProps> = ({
  uiItemsGroups = {},
  closeModal,
}) => {
  const [groups, setGroups] = React.useState(uiItemsGroups);

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

      items.push({
        id: `${groupName}/separator_${items.length}`,
        groupName,
        name: 'Separator ' + items.length,
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

      items = items.filter((item: any) => item.id !== id);

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

  return (
    <Modal
      name={modalName}
      title="UI Items Designer"
      containerWidthAuto={true}
    >
      <UiItemsWrapper>
        <div className="ui-items">
          {itemsGroups && itemsGroups.map(
            (group, index) => {
              if (!group.items.length) {
                return null;
              }

              return (
                <div
                  className="ui-items__group"
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
                  <GridLayout
                    layout={group.layout}
                    cols={1}
                    rowHeight={31}
                    width={200}
                    isResizable={false}
                    containerPadding={[0, 0]}
                    onLayoutChange={(layout: Layout[]) => console.log('---layout', layout)}
                  >
                    {group.layout && group.items.map(
                      item => {
                        const { id, name, separator} = item;

                        return (
                          <div
                            className={`ui-items__item ${separator
                              ? 'ui-items__item--separator'
                              : ''}`
                            }
                            key={id}
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
