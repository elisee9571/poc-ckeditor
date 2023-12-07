import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Autosave } from '@ckeditor/ckeditor5-autosave';
import { Bold, Italic, Strikethrough, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { CKBox } from '@ckeditor/ckeditor5-ckbox';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { FontBackgroundColor, FontColor, FontFamily, FontSize } from '@ckeditor/ckeditor5-font';
import { Heading, Title } from '@ckeditor/ckeditor5-heading';
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support';
import {
    Image,
    ImageCaption,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    PictureEditing
} from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { AutoLink, Link } from '@ckeditor/ckeditor5-link';
import { List, TodoList } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Style } from '@ckeditor/ckeditor5-style';
import {
    Table,
    TableCaption,
    TableCellProperties,
    TableProperties,
    TableToolbar
} from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing'

ClassicEditor
    .create(document.querySelector('#editor'), {
        plugins: [
            Alignment,
            Autoformat,
            Autosave,
            Bold,
            Italic,
            Strikethrough,
            Underline,
            CKBox,
            CloudServices,
            Essentials,
            FontBackgroundColor,
            FontColor,
            FontFamily,
            FontSize,
            Heading,
            Title,
            GeneralHtmlSupport,
            Image,
            ImageCaption,
            ImageStyle,
            ImageToolbar,
            ImageUpload,
            PictureEditing,
            Indent,
            AutoLink,
            Link,
            List,
            TodoList,
            MediaEmbed,
            Paragraph,
            PasteFromOffice,
            Style,
            Table,
            TableCaption,
            TableCellProperties,
            TableProperties,
            TableToolbar,
            TextTransformation,
            SourceEditing
        ],
        toolbar: {
            items: [
                'heading',
                '|',
                'bold',
                'italic',
                'underline',
                'strikethrough',
                '|',
                'fontColor',
                'fontBackgroundColor',
                'fontFamily',
                'fontSize',
                '|',
                'alignment',
                '|',
                'numberedList',
                'bulletedList',
                '|',
                'indent',
                'outdent',
                '|',
                'link',
                'insertTable',
                '|',
                'imageUpload',
                'mediaEmbed',
                '|',
                'undo',
                'redo',
                'sourceEditing'
            ]
        },
        language: 'fr'
    })
    .catch(error => {
        console.error(error);
    });