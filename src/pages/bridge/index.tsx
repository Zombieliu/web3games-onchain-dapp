import Header from "../../components/header/index.";
import Tail from "../../components/tail";
import React, {Fragment, useState } from 'react'
import {Listbox, Tab, Transition} from "@headlessui/react";
import Link from "next/link";
import {CheckIcon, SelectorIcon} from "@heroicons/react/solid";
import {useAtom} from "jotai";
import {
    Select_TokenTop,
    SwapTokenTop,
    WalletButtonShowState,
    WalletListShowState
} from "../../jotai";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const from = [
    {
        id: 1,
        name: 'Web3Games',
        avatar:'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAIAAAAiOjnJAAANrklEQVR4nOzdf2xT1fsH8LW1rCys\n' +
          'rFmdJYQRfigOI3PLcMGBwhSFiGRiQBRQFHUZIE6IAolK0JhgJCwEibqIc1o0+BMRFcLiRBFRMlBD\n' +
          'RYLLZIOBW+cortvatfLN9zOsULr29ul5zlnb9+s//+juc87ztrS995yjTwFggGABCwQLWCBYwALB\n' +
          'AhYIFrBAsIAFggUsECxggWABCwQLWCBYwALBAhYIFrBAsIAFggUsECxggWABCwQLWCBYwALBAhYI\n' +
          'FrBAsIAFggUsECxggWABCwQLWCBYwALBAhYIFrBAsIAFggUsECxggWABCwQLWCBYwALBAhYIFrBA\n' +
          'sIAFggUsECxggWABCwQLWCBYwALBAhYIFrC4QnUBvMaOHTtx4kTVVUj1999/v/fee6qrSHRWq7W7\n' +
          'u/t8Mlm2bJnqWf9/BtUF8Ors7ExLS5s0aZLqQiRxOp2zZ89WXUVySE9Pb25uVv0+IklZWZnq+U4m\n' +
          't956q+qOy7B7927VM518tm/frrrvvHp6esaOHat6mpPPpEmT/H6/6u4z2rJli+o5TlZVVVWqu8/F\n' +
          '7XZnZ2ernuBkNWTIkHPnzqnOAIsXXnhB9ewmt/nz56vOgHiHDx/W63EHRSmdTtfS0qI6CYLdcsst\n' +
          'qucVUlIWLFigOgki1dXVqZ5R+NeuXbtU50EMn8+Xl5enejrhXzk5OV6vV3UqBKisrFQ9l31K8HuF\n' +
          'ITmdTr1eP3nyZNWFxKSxsXHGjBk+n091IaEl6beJqqqqzs5O1VXEZMuWLV1dXaqriHM2m034Y1VP\n' +
          'PfWU6n/K6Orr681ms9gJSUZ2u/3EiRMDBw4U+Df1ev2hQ4dUJ4To9ttvFzgVScpqtfbO5tNPPy32\n' +
          'L998882qE0Kxc+dOsfOQpD7//PPeCW1pacnIyBD7x2tra1XnJDp+v99qtYqdBA461QVEMG3atC+/\n' +
          '/DLwnxUVFcuXLxf492+44YaKiooY/0hhYaHYf6bDsNvtCxYskHOthDV48ODffvvt4v9fPR5Pfn6+\n' +
          '6rouUVRUJO3t6syZM0OHDlU94vi3bNmyyyf38OHDquu6hMzf8RcuXKh6uPEvLS2tsbEx5PwWFBSo\n' +
          'ru6CO++8U1qqDh48qNP1948uceCNN97oa4qPHz+empqqusCUjIwMmc9KlJSUqB5x/MvPz/f5fGFm\n' +
          'WfhPDwQVFRXSUrVnzx7Vw00IBw4cCD/RLpdr1KhRCivMysryeDxyUnXu3DkslBBgypQpWqZb7fIB\n' +
          'mU/Qr1q1SuFIE4Rer//pp5+0THdXV9eIESOUFFlQUCBtzU9XV1d/+EAZ91588UXtk37gwAH5X5RS\n' +
          'U1N///13zixdorS0VPIAE9Dw4cM7Ozujmnf5P0MvXLiQLUXBfv75Z4MhGZ+ZE2zDhg3RTv3Jkyev\n' +
          'uELeZkyDBg1yOBw8KQrm9XonTJggbWgJ67rrruvp6SE04PHHH4/2WkajkVZkmJ9thfP5fOPGjaPV\n' +
          'Cf/Zs2cPrQFtbW2ZmZlRXWvt2rXkD/4hbzQxqa2tpRUJFyxZsiSWBnz66afar9X7nY78wd9oNP76\n' +
          '66/iwhNBP9lILS7pdLq2trYYGzB16lSNl9u3b1/vS+bPn08reNq0aSIyo8lff/2Fhc5Eixcvjr0B\n' +
          'NTU1Wq716KOPBl4Sywf/bdu2xV6zRnjTohg6dGhHR4eQBkTcJdFgMLhcrotfsnTpUlrZgQemJXC7\n' +
          '3cOGDaPVmbyqq6tFNaChocFkMoW5VllZWdBLCB/8A+x2u6jKI9q6dSt1gpPS9OnTxTbgtdde6+ta\n' +
          'I0eODLmD8vbt22nFS97ddM6cOTHMdJL57LPPxM6+z+cbPHhwyGt9+OGHfb1K+wf/IA8//LDY+sPQ\n' +
          '+CESUu6++26OBoR80wq/0ov8tJNOp5O5zgdvWpGZzebTp08zNeDyjd1ramrCv4S8PbrMnx7+/PPP\n' +
          'vt6P4YKXXnqJrwF1dXUX//aj5a0x4gf/MCKmVqANGzaIa0LCycrK4m7A6tWre6+VmZmp8dfXMB/8\n' +
          'w5O8u6nNZhPajQRSWVnJPfvHjh3rvdO8efNmjS/x+XzknTZWr17NPKD/vPnmm6IbkhCKiorCL5QQ\n' +
          'Zc2aNTabLaonJshvWiaTqbW1lXM0//H7/dh3NIQjR47IaYDX6yV8ZSPvl3T5r698jh8/PmDAANGd\n' +
          'iXOvvPKKtAYQBH3w185gMPzyyy/S6nziiScYmhPPJD8zTrBy5Ura0HJycmjPKhI0NzcPGjRIdHOE\n' +
          'UfA8td/vb2xsnDt3rvxLa5Sdnf3666//888/0b7Q6XTabLbx48fz1HWJ9PT0lJSUr776SsK14smx\n' +
          'Y8fk/J9N89xzz9HGNW7cOLfbLafIrq6u66+/XnRn4tzkyZPlzD6N1+u99tpraUN7/vnnpdX5/fff\n' +
          'i+5M/AtzV7g/+OKLL2jjSktLa2pqklYn3rSCWSyWfn6yzY033kgbmszdTY8cOSJzAVx8WLVqlbQG\n' +
          'EHz33XfkldZBexGyIj8Hm7CuuuqqU6dOSWsAwWOPPUYbWnFxsZwbDL3PweIgzGD33XefnNmncblc\n' +
          '5Ju+Em6JBrz66quiOxP/Auux+qf169fTxpWVlXX27Fk5RXZ0dGDf22DZ2dlyZp+mu7t75MiRtKEt\n' +
          'XbpUWp1ff/216M7Ev507d0prAMHHH39MG5fZbD5z5oy0Ou+55x7RnYlz11xzTXt7u7QGEMyYMYM2\n' +
          'tLlz50orsqGhAcumg5WXl0trAEFzczN5aMIXI4XxyCOPCG1L/DMajTJ/+yGYNWsWbWjFxcXSinQ4\n' +
          'HKI7E/+YFoSJ8u677xIGpdPpfvjhB2lF3nXXXQydiXM6ne7gwYPSehAt2pZaDzzwgLQKGxsbGdqS\n' +
          'EMaPHx9yIbxyH330EWE4Npvt5MmT0oqcOXMmQ08SBeuSQxqXy5WVlUUYyzPPPCOtyG3btjF0I4GY\n' +
          'zWZpD/hqRDthxWq1xr6hnEZut3v48OEM3UgsMpfpRbR//37aKHbs2CGtyHXr1oluQiJKTU2tr6+X\n' +
          '1pXwFi1aRBjC1KlTpVXY3t4eF+f59gvTp0+XdqxIGN9++y3tt2yZG+CSn+1JUm+//ba03oTk8XjG\n' +
          'jBlDqHzOnDnSity7dy/D3Cc0mQ/4hkTb2sVkMv3xxx/SiszLy2OY+0S3ceNGaR0K0tHRQTvAQubz\n' +
          'feR9LpOdxWJxOp3S+nSxZ599llBwbm6utCeSPR7P6NGjGWY9Ocg8bSvA4XAMHDiQUG2Yo6yFI6+q\n' +
          'hQuknYsUcNNNNxHqlPmh0OFwYNVXrObNmyetYefPn9+xYwehSL1ef+jQIWlFrlixgmGmk8/7778v\n' +
          'p2E9PT20tcVr166VU6Gqo2UTE+HwVZrNmzcTyhswYIC0vUD8fn9hYSHDHCerdevWcfesqamJdm9k\n' +
          'zZo13LUFkPezhNCuvPJK7mV6tIePc3JyvF4va2EBPT09/Xm/tXi1YsUKvp6Rl0vs2rWLr6ogmzZt\n' +
          'Ej2p8D/ffPMNU8+mTJlCqOfee+9lqudy2NOWUX5+PkfPaEtSdTrd/v37OeoJqaSkhGFG4V979+4V\n' +
          '2zCn00lbRF9aWiq2kjCw3Si7q6++2uPxCOwZbdsPm80m86QTHBogw/r160U1jLxRUVVVlagaIvrg\n' +
          'gw8YZhEuYzQaHQ6HkJ7NmzePUMCoUaOEXF2LlpaWjIwMhlmEUBYtWhR7z8ibQX7yySciMqNJaWkp\n' +
          'w/xBH0wmU+xHjNAev5w5c6agzER26tQpg0HBOQ9JbcKECbH0jLbhNs4YTwp2u53WMPIRAYsXLxYd\n' +
          'nj7t27ePYc5Ag/T0dNqy6eXLlxMuZ7FYpG0Q53a7hw0bxjBnoM2mTZui7Vng/NVoGY3Go0eP8gQp\n' +
          'WGVlJcNsgWaZmZknTpyIqmdLliwhX07OzcH29nYslFCvpKREe8/IR132krORWnl5udAZAqqamhqN\n' +
          'PSMfzhsQ47fRiI4ePUr7lxrEKyoq0tKzl19+WcjlWB9nzc3NFVIkiBHxnDqfz2c2m4Vci/xtNKIf\n' +
          'f/xRSIUgzIgRI1pbW8P0TNTbVS+ON63u7u6CggKBRYIYZWVlffWsoaHBZDIJvBbHqenYP62fMhgM\n' +
          'LpcrZM9mz54t/HKzZs0SmKrTp0+L+pcaxAt5xAjfrixvvfWWqGDRbgaAPJefU3fbbbcxXWvixIlC\n' +
          'UlVfX5+amspUJIiRm5t78brkrVu3sl6uuro6xlT5/f477riDtUgQI/CVra2tLTMzk/VaFosl/LfR\n' +
          'iKqrq1krBGHGjBnTu+BCzkHcYb6NajFkyBAJRYIY5eXlTU1N0i5H3sRr48aN0ooEAYxGY3FxsbTL\n' +
          '0U5Nb21ttVgs0oqEuLR79+5og/Xggw+qrhr6vezs7Kh2yaqtrVVdMsSJqI4uu//++1XXC3HCarVq\n' +
          'fCgep8BBdJ588smIqcIpcBA1o9FYV1cXPlgrV65UXSbEoby8vDCpOnv2bCwP3UNSC3NqOp5iALrR\n' +
          'o0eHPDUdp8BBrC7/6cHn8+EUOIiV2WwOOoDYbrerLgoSwkMPPRRIFU6BA2FMJlNDQ0NvsMSuEYJk\n' +
          'V1hY6Pf7cQociPfOO+/gyWMQj7YrMwAEw40FYIFgAQsEC1ggWMACwQIWCBawQLCABYIFLBAsYIFg\n' +
          'AQsEC1ggWMACwQIWCBawQLCABYIFLBAsYIFgAQsEC1ggWMACwQIWCBawQLCABYIFLBAsYIFgAYv/\n' +
          'CwAA//9vswm0QXOjDQAAAABJRU5ErkJggg=='
    },
    {
        id: 2,
        name: 'Binance',
        avatar:
            'data:image/png;base64,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',
    },
    {
        id: 3,
        name: 'Ethereum ',
        avatar:
            'data:image/png;base64,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',
    },

]
const to = [
    {
        id: 1,
        name: 'Web3Games',
        avatar:'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAIAAAAiOjnJAAANrklEQVR4nOzdf2xT1fsH8LW1rCys\n' +
          'rFmdJYQRfigOI3PLcMGBwhSFiGRiQBRQFHUZIE6IAolK0JhgJCwEibqIc1o0+BMRFcLiRBFRMlBD\n' +
          'RYLLZIOBW+cortvatfLN9zOsULr29ul5zlnb9+s//+juc87ztrS995yjTwFggGABCwQLWCBYwALB\n' +
          'AhYIFrBAsIAFggUsECxggWABCwQLWCBYwALBAhYIFrBAsIAFggUsECxggWABCwQLWCBYwALBAhYI\n' +
          'FrBAsIAFggUsECxggWABCwQLWCBYwALBAhYIFrBAsIAFggUsECxggWABCwQLWCBYwALBAhYIFrBA\n' +
          'sIAFggUsECxggWABCwQLWCBYwALBAhYIFrC4QnUBvMaOHTtx4kTVVUj1999/v/fee6qrSHRWq7W7\n' +
          'u/t8Mlm2bJnqWf9/BtUF8Ors7ExLS5s0aZLqQiRxOp2zZ89WXUVySE9Pb25uVv0+IklZWZnq+U4m\n' +
          't956q+qOy7B7927VM518tm/frrrvvHp6esaOHat6mpPPpEmT/H6/6u4z2rJli+o5TlZVVVWqu8/F\n' +
          '7XZnZ2ernuBkNWTIkHPnzqnOAIsXXnhB9ewmt/nz56vOgHiHDx/W63EHRSmdTtfS0qI6CYLdcsst\n' +
          'qucVUlIWLFigOgki1dXVqZ5R+NeuXbtU50EMn8+Xl5enejrhXzk5OV6vV3UqBKisrFQ9l31K8HuF\n' +
          'ITmdTr1eP3nyZNWFxKSxsXHGjBk+n091IaEl6beJqqqqzs5O1VXEZMuWLV1dXaqriHM2m034Y1VP\n' +
          'PfWU6n/K6Orr681ms9gJSUZ2u/3EiRMDBw4U+Df1ev2hQ4dUJ4To9ttvFzgVScpqtfbO5tNPPy32\n' +
          'L998882qE0Kxc+dOsfOQpD7//PPeCW1pacnIyBD7x2tra1XnJDp+v99qtYqdBA461QVEMG3atC+/\n' +
          '/DLwnxUVFcuXLxf492+44YaKiooY/0hhYaHYf6bDsNvtCxYskHOthDV48ODffvvt4v9fPR5Pfn6+\n' +
          '6rouUVRUJO3t6syZM0OHDlU94vi3bNmyyyf38OHDquu6hMzf8RcuXKh6uPEvLS2tsbEx5PwWFBSo\n' +
          'ru6CO++8U1qqDh48qNP1948uceCNN97oa4qPHz+empqqusCUjIwMmc9KlJSUqB5x/MvPz/f5fGFm\n' +
          'WfhPDwQVFRXSUrVnzx7Vw00IBw4cCD/RLpdr1KhRCivMysryeDxyUnXu3DkslBBgypQpWqZb7fIB\n' +
          'mU/Qr1q1SuFIE4Rer//pp5+0THdXV9eIESOUFFlQUCBtzU9XV1d/+EAZ91588UXtk37gwAH5X5RS\n' +
          'U1N///13zixdorS0VPIAE9Dw4cM7Ozujmnf5P0MvXLiQLUXBfv75Z4MhGZ+ZE2zDhg3RTv3Jkyev\n' +
          'uELeZkyDBg1yOBw8KQrm9XonTJggbWgJ67rrruvp6SE04PHHH4/2WkajkVZkmJ9thfP5fOPGjaPV\n' +
          'Cf/Zs2cPrQFtbW2ZmZlRXWvt2rXkD/4hbzQxqa2tpRUJFyxZsiSWBnz66afar9X7nY78wd9oNP76\n' +
          '66/iwhNBP9lILS7pdLq2trYYGzB16lSNl9u3b1/vS+bPn08reNq0aSIyo8lff/2Fhc5Eixcvjr0B\n' +
          'NTU1Wq716KOPBl4Sywf/bdu2xV6zRnjTohg6dGhHR4eQBkTcJdFgMLhcrotfsnTpUlrZgQemJXC7\n' +
          '3cOGDaPVmbyqq6tFNaChocFkMoW5VllZWdBLCB/8A+x2u6jKI9q6dSt1gpPS9OnTxTbgtdde6+ta\n' +
          'I0eODLmD8vbt22nFS97ddM6cOTHMdJL57LPPxM6+z+cbPHhwyGt9+OGHfb1K+wf/IA8//LDY+sPQ\n' +
          '+CESUu6++26OBoR80wq/0ov8tJNOp5O5zgdvWpGZzebTp08zNeDyjd1ramrCv4S8PbrMnx7+/PPP\n' +
          'vt6P4YKXXnqJrwF1dXUX//aj5a0x4gf/MCKmVqANGzaIa0LCycrK4m7A6tWre6+VmZmp8dfXMB/8\n' +
          'w5O8u6nNZhPajQRSWVnJPfvHjh3rvdO8efNmjS/x+XzknTZWr17NPKD/vPnmm6IbkhCKiorCL5QQ\n' +
          'Zc2aNTabLaonJshvWiaTqbW1lXM0//H7/dh3NIQjR47IaYDX6yV8ZSPvl3T5r698jh8/PmDAANGd\n' +
          'iXOvvPKKtAYQBH3w185gMPzyyy/S6nziiScYmhPPJD8zTrBy5Ura0HJycmjPKhI0NzcPGjRIdHOE\n' +
          'UfA8td/vb2xsnDt3rvxLa5Sdnf3666//888/0b7Q6XTabLbx48fz1HWJ9PT0lJSUr776SsK14smx\n' +
          'Y8fk/J9N89xzz9HGNW7cOLfbLafIrq6u66+/XnRn4tzkyZPlzD6N1+u99tpraUN7/vnnpdX5/fff\n' +
          'i+5M/AtzV7g/+OKLL2jjSktLa2pqklYn3rSCWSyWfn6yzY033kgbmszdTY8cOSJzAVx8WLVqlbQG\n' +
          'EHz33XfkldZBexGyIj8Hm7CuuuqqU6dOSWsAwWOPPUYbWnFxsZwbDL3PweIgzGD33XefnNmncblc\n' +
          '5Ju+Em6JBrz66quiOxP/Auux+qf169fTxpWVlXX27Fk5RXZ0dGDf22DZ2dlyZp+mu7t75MiRtKEt\n' +
          'XbpUWp1ff/216M7Ev507d0prAMHHH39MG5fZbD5z5oy0Ou+55x7RnYlz11xzTXt7u7QGEMyYMYM2\n' +
          'tLlz50orsqGhAcumg5WXl0trAEFzczN5aMIXI4XxyCOPCG1L/DMajTJ/+yGYNWsWbWjFxcXSinQ4\n' +
          'HKI7E/+YFoSJ8u677xIGpdPpfvjhB2lF3nXXXQydiXM6ne7gwYPSehAt2pZaDzzwgLQKGxsbGdqS\n' +
          'EMaPHx9yIbxyH330EWE4Npvt5MmT0oqcOXMmQ08SBeuSQxqXy5WVlUUYyzPPPCOtyG3btjF0I4GY\n' +
          'zWZpD/hqRDthxWq1xr6hnEZut3v48OEM3UgsMpfpRbR//37aKHbs2CGtyHXr1oluQiJKTU2tr6+X\n' +
          '1pXwFi1aRBjC1KlTpVXY3t4eF+f59gvTp0+XdqxIGN9++y3tt2yZG+CSn+1JUm+//ba03oTk8XjG\n' +
          'jBlDqHzOnDnSity7dy/D3Cc0mQ/4hkTb2sVkMv3xxx/SiszLy2OY+0S3ceNGaR0K0tHRQTvAQubz\n' +
          'feR9LpOdxWJxOp3S+nSxZ599llBwbm6utCeSPR7P6NGjGWY9Ocg8bSvA4XAMHDiQUG2Yo6yFI6+q\n' +
          'hQuknYsUcNNNNxHqlPmh0OFwYNVXrObNmyetYefPn9+xYwehSL1ef+jQIWlFrlixgmGmk8/7778v\n' +
          'p2E9PT20tcVr166VU6Gqo2UTE+HwVZrNmzcTyhswYIC0vUD8fn9hYSHDHCerdevWcfesqamJdm9k\n' +
          'zZo13LUFkPezhNCuvPJK7mV6tIePc3JyvF4va2EBPT09/Xm/tXi1YsUKvp6Rl0vs2rWLr6ogmzZt\n' +
          'Ej2p8D/ffPMNU8+mTJlCqOfee+9lqudy2NOWUX5+PkfPaEtSdTrd/v37OeoJqaSkhGFG4V979+4V\n' +
          '2zCn00lbRF9aWiq2kjCw3Si7q6++2uPxCOwZbdsPm80m86QTHBogw/r160U1jLxRUVVVlagaIvrg\n' +
          'gw8YZhEuYzQaHQ6HkJ7NmzePUMCoUaOEXF2LlpaWjIwMhlmEUBYtWhR7z8ibQX7yySciMqNJaWkp\n' +
          'w/xBH0wmU+xHjNAev5w5c6agzER26tQpg0HBOQ9JbcKECbH0jLbhNs4YTwp2u53WMPIRAYsXLxYd\n' +
          'nj7t27ePYc5Ag/T0dNqy6eXLlxMuZ7FYpG0Q53a7hw0bxjBnoM2mTZui7Vng/NVoGY3Go0eP8gQp\n' +
          'WGVlJcNsgWaZmZknTpyIqmdLliwhX07OzcH29nYslFCvpKREe8/IR132krORWnl5udAZAqqamhqN\n' +
          'PSMfzhsQ47fRiI4ePUr7lxrEKyoq0tKzl19+WcjlWB9nzc3NFVIkiBHxnDqfz2c2m4Vci/xtNKIf\n' +
          'f/xRSIUgzIgRI1pbW8P0TNTbVS+ON63u7u6CggKBRYIYZWVlffWsoaHBZDIJvBbHqenYP62fMhgM\n' +
          'LpcrZM9mz54t/HKzZs0SmKrTp0+L+pcaxAt5xAjfrixvvfWWqGDRbgaAPJefU3fbbbcxXWvixIlC\n' +
          'UlVfX5+amspUJIiRm5t78brkrVu3sl6uuro6xlT5/f477riDtUgQI/CVra2tLTMzk/VaFosl/LfR\n' +
          'iKqrq1krBGHGjBnTu+BCzkHcYb6NajFkyBAJRYIY5eXlTU1N0i5H3sRr48aN0ooEAYxGY3FxsbTL\n' +
          '0U5Nb21ttVgs0oqEuLR79+5og/Xggw+qrhr6vezs7Kh2yaqtrVVdMsSJqI4uu//++1XXC3HCarVq\n' +
          'fCgep8BBdJ588smIqcIpcBA1o9FYV1cXPlgrV65UXSbEoby8vDCpOnv2bCwP3UNSC3NqOp5iALrR\n' +
          'o0eHPDUdp8BBrC7/6cHn8+EUOIiV2WwOOoDYbrerLgoSwkMPPRRIFU6BA2FMJlNDQ0NvsMSuEYJk\n' +
          'V1hY6Pf7cQociPfOO+/gyWMQj7YrMwAEw40FYIFgAQsEC1ggWMACwQIWCBawQLCABYIFLBAsYIFg\n' +
          'AQsEC1ggWMACwQIWCBawQLCABYIFLBAsYIFgAQsEC1ggWMACwQIWCBawQLCABYIFLBAsYIFgAYv/\n' +
          'CwAA//9vswm0QXOjDQAAAABJRU5ErkJggg=='
    },
    {
        id: 2,
        name: 'Binance',
        avatar:
            'data:image/png;base64,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',
    },
    {
        id: 3,
        name: 'Ethereum ',
        avatar:
            'data:image/png;base64,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',
    },

]
const Bridge = () =>{
    const [WalletButtonShow,SetWalletButtonShow]=useAtom(WalletButtonShowState)
    const [,SetOpenWalletListState] = useAtom(WalletListShowState)
    const [selectedfrom, setSelectedfrom] = useState(from[0])
    const [selectedto, setSelectedto] = useState(from[1])
    const [,setSelectTokenTop] = useAtom(Select_TokenTop)
    const [swapTokenTop,setSwapTokenTop] = useAtom(SwapTokenTop)
    const selectTokenTop = () =>{
        setSelectTokenTop(true)
    }
    const exchange =() =>{
        setSelectedfrom(selectedto)
        setSelectedto(selectedfrom)
    }

    return (
        <div>
            <Header/>
            <div className="relative pt-16">
                <div className="absolute inset-x-0 bottom-0    " />
                <div className=" mx-auto  ">
                    <div className="bg-black bg-opacity-95 ">
                        <div className="max-w-7xl relative px-5 py-16  sm:px-6  mx-auto ">
                            <div className="text-white text-center text-3xl font-semibold">
                                Connect your wallets to get started.
                            </div>
                            <div className="flex  justify-center  mx-auto px-2 pt-12 sm:px-0">
                                <div className="bg-black bg-opacity-90 p-5 rounded-2xl w-full md:w-1/2">
                                        <div className="p-2 md:p-5">
                                            <div className="text-white text-xl">
                                                 From
                                                <Listbox value={selectedfrom} onChange={setSelectedfrom}>
                                                    {({ open }) => (
                                                        <>
                                                            <div className="my-1 relative">
                                                                <Listbox.Button className="relative w-44 bg-gray-600  bg-opacity-70 border border-gray-500 rounded-md shadow-sm pl-3   py-2 text-left cursor-default  sm:text-sm">
                                                                  <span className="flex items-center ">
                                                                    <img src={selectedfrom.avatar} alt="" className="flex-shrink-0 h-8 w-8 rounded-lg" />
                                                                    <span className="ml-3 block text-gray-200 truncate ">{selectedfrom.name}</span>
                                                                  </span>
                                                                    <span className=" absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                                                    <SelectorIcon className="h-5 w-5 text-gray-200" aria-hidden="true" />
                                                                  </span>
                                                                </Listbox.Button>

                                                                <Transition
                                                                    show={open}
                                                                    as={Fragment}
                                                                    leave="transition ease-in duration-100"
                                                                    leaveFrom="opacity-100"
                                                                    leaveTo="opacity-0"
                                                                >
                                                                    <Listbox.Options className="absolute z-10 mt-1 w-44 bg-gray-600 shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                                        {from.map((from) => (
                                                                            <Listbox.Option
                                                                                key={from.id}
                                                                                className={({ active }) =>
                                                                                    classNames(
                                                                                        active ? 'text-white bg-gray-800' : 'text-gray-900',
                                                                                        'cursor-default select-none relative py-2 pl-3 pr-9'
                                                                                    )
                                                                                }
                                                                                value={from}>
                                                                                {({ selected, active }) => (
                                                                                    <>
                                                                                        <div className="flex items-center">
                                                                                            <img src={from.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                                                                                            <span
                                                                                                className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                                                            >{from.name}</span>
                                                                                        </div>
                                                                                        {selected ? (
                                                                                            <span
                                                                                                className={classNames(
                                                                                                    active ? 'text-white' : 'text-gray-800',
                                                                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                                )}
                                                                                            >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                                                                                        ) : null}
                                                                                    </>
                                                                                )}
                                                                            </Listbox.Option>
                                                                        ))}
                                                                    </Listbox.Options>
                                                                </Transition>
                                                            </div>
                                                        </>
                                                    )}
                                                </Listbox>
                                            </div>
                                                <div className="flex mt-5 w-full">
                                                    <input type="text"
                                                           className="text-xs md:text-sm border border-gray-500 placeholder-gray-50 bg-gray-600 rounded-lg p-2 py-3 w-full text-white    outline-none"
                                                           placeholder="0"
                                                           id="amount"
                                                    />
                                                    <div   className="-ml-36 text-sm flex items-center text-white font-semibold">
                                                        <button className="mr-2">
                                                        MAX</button>
                                                        <div className="flex items-center bg-gray-600 bg-opacity-90 p-1 rounded-full">
                                                            <div className="flex items-center">
                                                                <button onClick={selectTokenTop} className="flex items-center">
                                                                    <div>
                                                                        <img className="w-6 rounded-full mr-1" src={swapTokenTop.img} alt=""/>
                                                                    </div>
                                                                    <div className="text-gray-200">
                                                                        {swapTokenTop.name}
                                                                    </div>
                                                                    <i className="fa fa-angle-down text-white ml-3 " aria-hidden="true"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            <div className="flex justify-end text-gray-400 text-sm font-semibold mt-2">
                                                <div>
                                                    Available Balance:
                                                    <div className="flex justify-end">
                                                        0  {swapTokenTop.name}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="flex justify-center    -my-8">
                                        <button onClick={exchange} className="items-center flex justify-center p-3 border rounded-full">
                                        <i className="fa fa-exchange text-gray-400 transform rotate-90" aria-hidden="true"></i>
                                        </button>
                                    </div>

                                    <div className="p-2 md:p-5">
                                        <div className="text-white text-xl">
                                          To
                                            <Listbox value={selectedto} onChange={setSelectedto}>
                                                {({ open }) => (
                                                    <>
                                                        <div className="my-1 relative">
                                                            <Listbox.Button className="relative w-44 bg-gray-600  bg-opacity-70 border border-gray-500 rounded-md shadow-sm pl-3  py-2 text-left cursor-default  sm:text-sm">
              <span className="flex items-center ">
                <img src={selectedto.avatar} alt="" className="flex-shrink-0 h-8 w-8 rounded-lg" />
                <span className="ml-3 block text-gray-200  truncate">{selectedto.name}</span>
              </span>
                                                                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-200" aria-hidden="true" />
              </span>
                                                            </Listbox.Button>

                                                            <Transition
                                                                show={open}
                                                                as={Fragment}
                                                                leave="transition ease-in duration-100"
                                                                leaveFrom="opacity-100"
                                                                leaveTo="opacity-0"
                                                            >
                                                                <Listbox.Options className="absolute z-10 mt-1 w-44 bg-gray-600  shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                                    {to.map((to) => (
                                                                        <Listbox.Option
                                                                            key={to.id}
                                                                            className={({ active }) =>
                                                                                classNames(
                                                                                    active ? 'text-white bg-gray-800' : 'text-gray-900',
                                                                                    'cursor-default select-none relative py-2 pl-3 pr-9'
                                                                                )
                                                                            }
                                                                            value={to}
                                                                        >
                                                                            {({ selected, active }) => (
                                                                                <>
                                                                                    <div className="flex items-center">
                                                                                        <img src={to.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                                                                                        <span
                                                                                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                                                        >
                                                                                            {to.name}</span>
                                                                                    </div>

                                                                                    {selected ? (
                                                                                        <span
                                                                                            className={classNames(
                                                                                                active ? 'text-white' : 'text-gray-800',
                                                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                            )}
                                                                                        >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                                                                                    ) : null}
                                                                                </>
                                                                            )}
                                                                        </Listbox.Option>
                                                                    ))}
                                                                </Listbox.Options>
                                                            </Transition>
                                                        </div>
                                                    </>
                                                )}
                                            </Listbox>
                                        </div>
                                        <div className="my-3">

                                        <input type="text"
                                               className="text-xs  md:text-xl border border-gray-500 placeholder-gray-50 bg-gray-600 rounded-lg p-2 py-5 w-full text-white outline-none"
                                               id="amount"
                                               readOnly={true}
                                        />
                                            <div   className="-mt-14 md:-mt-16 ml-3 text-xs flex items-center text-gray-300 font-semibold">
                                                <button className="mr-2">
                                                    Estimated</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-10" >
                                        <div className={WalletButtonShow ? "hidden": "mt-8  flex justify-center"}>
                                            <button  onClick={()=>{SetOpenWalletListState(true)}} className="px-12 py-1.5 rounded-lg bg-blue-500">
                                                Connect Wallet
                                            </button>
                                        </div>
                                        <div className={WalletButtonShow ? "mt-8  flex justify-center": "hidden"}>
                                            <button className="px-8 flex flex-row items-center py-2  justify-center rounded-lg text-base focus:outline-none bg-indigo-500 text-white transition duration-300 transform hover:translate-x-2 ">
                                                Approve <i className="fa fa-arrow-right ml-2 " aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="text-white flex  justify-center w-full md:w-1/2 mx-auto px-4 mt-5 text-xs md:text-sm  sm:px-4">
                                <div className="w-full">
                               <div className="flex justify-between w-full items-center">
                                   <div className="">
                                       Bridge rate
                                   </div>
                                   <div className="hidden  md:flex items-center justify-end ml-10 md:ml-20">
                                       1 W3G on <img className="w-6 rounded-full mx-1" src={selectedfrom.avatar} alt=""/>
                                       = 1 W3G on <img className="w-6 mx-1" src={selectedto.avatar} alt=""/>
                                   </div>
                                   <div className="md:hidden ">
                                       1
                                   </div>
                               </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        Fee
                                    </div>
                                    <div className="flex items-center justify-end">
                                        0.000006
                                       </div>
                                </div>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            Estimated time of arrival
                                        </div>
                                        <div className="flex items-center justify-end ">
                                           5~20 mins
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            Min. amount greater than
                                        </div>
                                        <div className="flex items-center justify-end  ">
                                          0.01 W3G
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            Max. amount less than
                                        </div>
                                        <div className="flex items-center justify-end ">
                                           25,000 W3G
                                        </div>
                                    </div><div className="flex justify-between items-center">
                                    <div>
                                        Destination token address
                                    </div>
                                    <div className="flex items-center justify-end  ">
                                        <img className="w-6 mr-1" src="/img.png" alt=""/>
                                        <Link href="/">
                                            <a className="underline">
                                                0xfcDe4A87
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Tail/>
        </div>
    )
}

export default Bridge
