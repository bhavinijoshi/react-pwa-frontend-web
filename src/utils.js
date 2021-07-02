import React, { forwardRef } from 'react';
import Cryptr from 'cryptr';
import { CsvBuilder } from 'filefy';
import { i18n } from 'i18n';
import { AddBox, Check, Clear, DeleteOutline, ChevronRight, SaveAlt, FilterList, LastPage, Edit, ViewColumn, FirstPage, ChevronLeft, Search, ArrowUpward, Remove } from '@material-ui/icons';
import Message from 'view/shared/message';
import config from './config';

const baseMarkerColor = '#115cd4';
const hoverMarkerColor = '#e6ab1c';

export const removeFromArray = (arr, a) => {
  var what,
    L = a.length,
    ax;
  while (L > 1 && arr.length) {
    what = a[--L];
    while ((ax = arr.indexOf(what)) !== -1) {
      arr.splice(ax, 1);
    }
  }
  return arr;
};

/**
 *
 * @param image             string url
 * @returns  {Promise<any>} object containing image properties like width and height
 */
export const onImageLoad = (image) => {
  const img = image;
  return new Promise((resolve) => {
    img.onload = () => {
      resolve(img);
    };
  });
};

/**
 *
 * @param containerWidth              integer that represents width in pixels of parent DOM node
 * @param containerHeight             integer that represents height in pixels of parent DOM node
 * @param width                       integer that represents width in pixels of DOM node we want to change
 * @param height                      integer that represents height in pixels of DOM node we want to change
 * @param scalingFactor               float that represents how to scale the target relative to the parent
 * @returns {{x: number, scale: number, y: number}}
 */
export const getObjectFit = (
  containerWidth,
  containerHeight,
  width,
  height,
  scalingFactor
) => {
  const doRatio = width / height;
  const cRatio = containerWidth / containerHeight;
  const test = doRatio > cRatio;
  let targetWidth = 0;
  let targetHeight = 0;
  let scale = 0;

  if (test) {
    /* handle case when our image is larger than the container and we want to scale the image DOWN */
    targetWidth = containerWidth;
    targetHeight = targetWidth / doRatio;
    scale = (scalingFactor * containerWidth) / width;
  } else {
    /* handle case where our image is smaller than the container and we want to scale the image UP */
    targetHeight = containerHeight;
    targetWidth = targetHeight * doRatio;
    scale = scalingFactor * (containerHeight / height);
  }
  const x = (containerWidth - scalingFactor * targetWidth) / 2;
  const y = (containerHeight - scalingFactor * targetHeight) / 2;

  return {
    scale,
    x,
    y,
  };
};

export const encryptText = (text) => {
  const cryptr = new Cryptr(config.REACT_APP_SECRET_KEY);
  return cryptr.encrypt(text);
}

export const decryptText = (encryptedText) => {
  const cryptr = new Cryptr(config.REACT_APP_SECRET_KEY);
  return cryptr.decrypt(encryptedText);
}

export const debounce = (fn, time) => {
  let timeoutId
  return wrapper
  function wrapper(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      timeoutId = null
      fn(...args)
    }, time)
  }
}

//MARKER TOOLTIPS AND HOVER AFFECTS
export const showTooltip = (evt, content, xAndyToBeDeductedDueToLayout = { x: 0, y: 0 }) => {
  const { x, y } = xAndyToBeDeductedDueToLayout
  //set position of tooltip
  let tooltip = document.getElementById('tooltip');
  tooltip.style.display = 'block';
  tooltip.style.left = (evt.pageX + 10 - x) + 'px';
  tooltip.style.top = (evt.pageY + 10 - y) + 'px';

  tooltip.innerHTML = content;
};
export const hideTooltip = () => {
  var tooltip = document.getElementById('tooltip');
  tooltip.style.display = 'none';
};
export const handleMouseEnter = (event) => {
  let id = event.target.getAttribute('id');
  let element = event.target;
  if (!id) {
    id = event.target.parentElement.getAttribute('id');
    element = event.target.parentElement;
    if (!id) {
      id = event.target.parentElement.parentElement.getAttribute(
        'id',
      );
      element = event.target.parentElement.parentElement;
    }
  }
  //change icon color and size
  element.setAttribute('fill', hoverMarkerColor);
  element.setAttribute('size', '50');
  element.setAttribute('height', '50');
  element.setAttribute('width', '50');
  element.setAttribute(
    'x',
    (parseInt(element.getAttribute('x') || 0) - 5).toString(),
  );
  element.setAttribute(
    'y',
    (parseInt(element.getAttribute('y') || 0) - 5).toString(),
  );
};
export const handleMouseLeave = (event) => {
  let id = event.target.getAttribute('id');
  let element = event.target;
  if (!id) {
    id = event.target.parentElement.getAttribute('id');
    element = event.target.parentElement;
    if (!id) {
      id = event.target.parentElement.parentElement.getAttribute(
        'id',
      );
      element = event.target.parentElement.parentElement;
    }
  }
  //reset icon color and size
  element.setAttribute('fill', baseMarkerColor);
  element.setAttribute('size', '40');
  element.setAttribute('height', '40');
  element.setAttribute('width', '40');
  element.setAttribute(
    'x',
    (parseInt(element.getAttribute('x') || 0) + 5).toString(),
  );
  element.setAttribute(
    'y',
    (parseInt(element.getAttribute('y') || 0) + 5).toString(),
  );
};
//END MARKER TOOLTIPS AND HOVER AFFECTS

export const getPosition = (containerWidth, containerHeight, x, y, limitX, limitY) => {
  const isCloseToEdge = Boolean(
    (x < limitX || (containerWidth - x < limitX))
    ||
    (y < limitY || (containerHeight - y < limitY))
  )
  const isCloseToBottomEdge = Boolean(isCloseToEdge && (containerHeight - y < limitY))
  const isCloseToLeftEdge = Boolean(isCloseToEdge && (x < limitX))
  return {
    ...(isCloseToEdge ?
      isCloseToLeftEdge && isCloseToBottomEdge ?
        {
          left: x || 0,
          bottom: containerHeight - y || 0
        }
        :
        isCloseToLeftEdge ?
          {
            left: x || 0,
            top: y || 0,
          }
          :
          {
            right: containerWidth - x || 0,
            bottom: containerHeight - y || 0
          }
      :
      {
        left: x || 0,
        top: y || 0,
      }
    )
  }
}

export const stringToObjectAccess = (fieldString, rowData) => {
  //for accessing nested value of object by including . in string
  const accessString = fieldString.replace("[", ".").replace("]", "")
  if (accessString.includes(".")) {
    if (accessString.includes(" ")) {
      let concatedString = ""
      accessString.split(" ").forEach((aString, index) => {
        if (!index) {
          return concatedString = aString.split('.').reduce((p, c) => p?.[c], rowData)
        }
        return concatedString = concatedString + " " + aString.split('.').reduce((p, c) => p?.[c], rowData)
      });
      return concatedString;
    }
    return accessString.split('.').reduce((p, c) => p?.[c], rowData)
  }
  return rowData[accessString]
}

export const exportToCsv = (fileName, tableColumns, apiData, delimiter) => {
  try {
    const columns = tableColumns.filter(columnDef => {
      return !columnDef.hidden && columnDef.field && columnDef.export !== false;
    });
    const data = apiData.rows.map(rowData =>
      columns.map(columnDef => {
        if (columnDef.render) {
          return columnDef.render(rowData)
        }
        return stringToObjectAccess(columnDef.field, rowData)
      })
    );
    new CsvBuilder((fileName) + '.csv')
      .setDelimeter(delimiter)
      .setColumns(columns.map(columnDef => columnDef.title))
      .addRows(data)
      .exportFile();
  }
  catch (e) {
    Message.error(i18n('common.apiError'))
  }
}

export const copyContent = (data) => {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(JSON.stringify(data, null, 4))
      .then(() => Message.success(i18n('common.copy')));
  } else {
    //for older version of safari and other old browsers
    let copyData = (event) => {
      event.preventDefault();
      event.clipboardData.setData(
        'text/plain',
        JSON.stringify(data, null, 4),
      );
    };
    window.addEventListener('copy', copyData);
    document.execCommand('copy');
    window.removeEventListener('copy', copyData);
    Message.success(i18n('common.copy'));
  }
}

export const cmToInch = (num) => {
  let inches = num * 0.39370
  return +(Math.round(inches + "e+2") + "e-2");
}

export const toDataURL = url => fetch(url)
  .then(response => response.blob())
  .then(blob => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(blob)
  }))

export const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];


export const flatten = (input) => {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    let next;
    // pop value from stack
    const n = stack.pop();
    res.push(n);
    // console.log("pop:", n);
    if (n.children && n.children.length) {
      next = n.children;
      stack.push(...next);
      // res.push(...next);
      // delete n.children;
      console.log("c l:", next.length, stack.length);
    } else {
      next = n;
      // res.push(next);
      console.log("c:", stack.length);
    }
  }
  // reverse to restore input order
  return res.reverse();
}


export const listToTree = (list, mapKey, parentKey) => {
  var map = {}, node, roots = [], i;
  for (i = 0; i < list.length; i += 1) {
    map[list[i][mapKey]] = i; // initialize the map
    list[i].children = []; // initialize the children
  }
  console.log("map:", map, list);
  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node[parentKey]) {
      // if you have dangling branches check that map[node[parentKey]] exists
      list[map[node[parentKey].toString()]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}

export const getLocalizationForTable = () => {
  return {
    body: {
      emptyDataSourceMessage: i18n('body.emptyDataSourceMessage'),
      addTooltip: i18n('common.add'),
      deleteTooltip: i18n('common.delete'),
      editTooltip: i18n('common.edit'),
      filterRow: {
        filterTooltip: i18n('common.Filter')
      },
      editRow: {
        deleteText: i18n('body.editRow.deleteText'),
        cancelTooltip: i18n('common.cancel'),
        saveTooltip: i18n('common.save'),
      }
    },
    grouping: {
      placeholder: i18n('grouping.placeholder'),
      groupedBy: i18n('grouping.groupedBy'),
    },
    header: {
      actions: i18n('header.actions'),
    },
    pagination: {
      labelDisplayedRows: i18n('pagination.labelDisplayedRowsCustom'),
      labelRowsSelect: i18n('pagination.labelRowsSelect'),
      labelRowsPerPage: i18n('pagination.labelRowsPerPage'),
      firstAriaLabel: i18n('pagination.firstAriaLabel'),
      firstTooltip: i18n('pagination.firstAriaLabel'),
      previousAriaLabel: i18n('pagination.previousAriaLabel'),
      previousTooltip: i18n('pagination.previousAriaLabel'),
      nextAriaLabel: i18n('pagination.nextAriaLabel'),
      nextTooltip: i18n('pagination.nextAriaLabel'),
      lastAriaLabel: i18n('pagination.lastAriaLabel'),
      lastTooltip: i18n('pagination.lastAriaLabel'),
    },
    toolbar: {
      addRemoveColumns: i18n('toolbar.addRemoveColumns'),
      nRowsSelected: i18n('toolbar.nRowsSelected'),
      showColumnsTitle: i18n('toolbar.showColumnsTitle'),
      showColumnsAriaLabel: i18n('toolbar.showColumnsAriaLabel'),
      exportTitle: i18n('toolbar.exportTitle'),
      exportAriaLabel: i18n('toolbar.exportTitle'),
      exportCSVName: i18n('toolbar.exportCSVName'),
      exportPDFName: i18n('toolbar.exportPDFName'),
      searchTooltip: i18n('toolbar.searchTooltip'),
      searchPlaceholder: i18n('toolbar.searchTooltip'),
    }
  }
}

export const getIconsForTable = () => {
  return {
    Add: forwardRef((props, ref) => (
      <AddBox {...props} ref={ref} />
    )),
    Check: forwardRef((props, ref) => (
      <Check {...props} ref={ref} style={{ color: 'green' }} />
    )),
    Clear: forwardRef((props, ref) => (
      <Clear {...props} ref={ref} style={{ color: 'red' }} />
    )),
    Delete: forwardRef((props, ref) => (
      <DeleteOutline {...props} ref={ref} />
    )),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => (
      <Edit {...props} ref={ref} style={{ color: 'darkorange' }} />
    )),
    Export: forwardRef((props, ref) => (
      <SaveAlt {...props} ref={ref} />
    )),
    Filter: forwardRef((props, ref) => (
      <FilterList {...props} ref={ref} />
    )),
    FirstPage: forwardRef((props, ref) => (
      <FirstPage {...props} ref={ref} />
    )),
    LastPage: forwardRef((props, ref) => (
      <LastPage {...props} ref={ref} />
    )),
    NextPage: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => (
      <Clear {...props} ref={ref} />
    )),
    Search: forwardRef((props, ref) => (
      <Search {...props} ref={ref} />
    )),
    SortArrow: forwardRef((props, ref) => (
      <ArrowUpward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => (
      <ViewColumn {...props} ref={ref} />
    )),
  }
}