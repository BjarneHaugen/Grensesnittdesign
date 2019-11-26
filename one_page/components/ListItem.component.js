const listItem = Vue.component('ds-list-item', {
    template: `
        <div>
            {{item.title}}
        </div>
    `,
    props: ['item']
});

export default listItem;